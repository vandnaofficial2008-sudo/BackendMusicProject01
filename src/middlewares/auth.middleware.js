const jwt = require("jsonwebtoken")

async function authArtist(req , res, next)
{
    const token = req.cookies.token
    if(!token)
    {
        return res.status(401).json({
            message : "User not registered"
        })
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET_TOKEN)
        if(!decoded){
            return res.status(401).json({
                message : "Invalid credentials..."
            })
        }
    
        const role = decoded.role
        if(role!="artist")
        {
            return res.status(403).json({
                message : "Access denied"
            })
        }

        req.user = decoded
        // new property called user whose value is decoded
            
        next()
    }
    catch(err)
    {
        console.log(err)
        return res.status(400).json({
            message : "Some error"
        })
    }
}

async function authUser(req , res , next)
{
    const token = req.cookies.token
    if(!token)
    {
        return res.status(401).json({
            message : "User not registered",
        })
    }
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET_TOKEN)
        if(!decoded)
        {
            return res.status(400).json({
                message : "Invalid token..."
            })
        }

        req.user = decoded
        next()
    }
    catch(err)
    {
        console.log(err)
        return res.status(401).json({
            message : "Some error occured"
        })
    }
}

module.exports = {authArtist, authUser}