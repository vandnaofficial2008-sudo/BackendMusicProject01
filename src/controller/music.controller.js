const musicModel = require("../models/music.model.js")
const jwt = require("jsonwebtoken")

const getURI = require("../services/storage.services.js")

async function creation(req,res)
{
    const file = req.file
    const response = await getURI(file.buffer.toString("base64"))

    const{uri , title , artist} = req.body
    const data = await musicModel.create({
        uri : response.url,
        title,
        artist : req.user.id
    })

    res.status(201).json({
        message : "Music uploaded successfully!",
        musicData : {
            title : title,
            artist : artist
        }
    })
}

module.exports = creation