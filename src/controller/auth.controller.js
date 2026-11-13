const userModel = require("../models/user.model.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function register(req,res)
{
    const{userName , email , password , role="user"} = req.body

    if (!email || !userName || !password) {
        return res.status(400).json({ 
            message: "All fields are required" 
        });
    }

    const isfind = await userModel.findOne({
        $or : [
            {userName : userName},
            {email :  email}
        ]
        // $or -> to return any user with -> userName || email
    })
    
    if(isfind)
    {
        return res.status(409).json({   //trying to replace
            message : "User already exists"
        })
    }

    const hashed = await bcrypt.hash(password , 10)
    // hashing user's password
    // n -> work factor => 10->fastest , 12->slower than 10 , 13-14 -> slowest(most secure among 3)

    const user = await userModel.create({
        userName,
        email, 
        password : hashed,
        role
    })

    const token = jwt.sign({"id" : user._id , "role" : user.role}, process.env.JWT_SECRET_TOKEN)

    res.cookie("token" , token)

    res.status(201).json({
        message : "User created successfully...",
        user : {
            userName : user.userName,
            email : user.email,
            role : user.role,
            id : user._id
        }
    })
}

async function loginUser(req,res)
{
    const{userName , password , email} = req.body

    const user = await userModel.findOne({
        $or : [
            {userName},
            {email}
        ]
    })

    if(!user)
    {
        return res.status(401).json({
            message : "User not found"
        })
    }
    
    const isValid = await bcrypt.compare(password , user.password)
    //to compare the input password with actual one

    if(!isValid)
    {
        return res.status(401).json({
            message : "Invalid password"
        })
    }

    const token = jwt.sign({id : user._id , role : user.role} , process.env.JWT_SECRET_TOKEN)

    res.cookie("token" , token)

    res.status(200).json({
        message : "User logged-in successfully...",
        user : {
            name : user.userName,
            email : user.email,
            role : user.role,
            id : user._id
        }
    })
}

module.exports = {register , loginUser}