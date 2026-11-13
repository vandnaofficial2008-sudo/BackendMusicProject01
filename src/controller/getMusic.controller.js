const musicModel = require("../models/music.model.js")
const albumModel = require("../models/album.model.js")

async function getMusic(req , res)
{
    const music = await musicModel
        .find()
        .skip(1)
        .limit(2)
        .populate("artist", "userName email")
    //  .populate -> to get info of "artist"
    //  .limit -> to limit no. of resources coming

    res.status(200).json({
        message : "Music found successfully",
        music : music
    })
}

async function getAlbum(req,res)
{
    const albums = await albumModel
        .find()
        .limit(2)
        .select("title artist")
        .populate("artist" , "userName email")
    // .select() -> to show selected items

    res.status(200).json({
        message : "Albums found successfully!",
        albums : albums
    })
}

async function showMusic(req,res)
{
    const albumID = req.params.albumId
    const music = await albumModel
        .find({_id:albumID})
        .populate("artist" , "userName musics")
    res.status(200).json({
        message : "Listen to music...",
        music : music
    })
}

module.exports = {getMusic , getAlbum , showMusic}