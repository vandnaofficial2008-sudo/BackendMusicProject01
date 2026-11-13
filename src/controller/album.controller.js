const albumModel = require("../models/album.model.js")
const jwt = require("jsonwebtoken")

async function createAlbum(req,res)
{
        const{title, musics} = req.body
        const album = await albumModel.create({
            title,
            musics : musics,
            artist : req.user.id
        })
        res.status(201).json({
            message : "Album created successfully!",
            title : album.title,
            artist : album.artist
        })
}

module.exports = createAlbum