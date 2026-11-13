const express = require("express")
const {authUser} = require("../middlewares/auth.middleware.js")
const {getMusic, getAlbum , showMusic} = require("../controller/getMusic.controller.js")

const router = express.Router()

router.get("/getMusic" , authUser , getMusic)
router.get("/getAlbum" , authUser , getAlbum)
router.get("/getAlbum/:albumId" , authUser , showMusic)

module.exports = router