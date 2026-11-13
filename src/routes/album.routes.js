const express=require("express")
const createAlbum = require("../controller/album.controller.js")
const {authArtist} = require("../middlewares/auth.middleware.js")

const router = express.Router()

router.post("/album" , authArtist , createAlbum)
//  middleware -> "authArtist" -> to not use same code again and again

module.exports = router