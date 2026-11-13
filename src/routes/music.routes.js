const express = require("express")
const router = express.Router()
const multer = require("multer")
const {authArtist} = require("../middlewares/auth.middleware.js")

const upload = multer({
    storage : multer.memoryStorage()
})

const create = require("../controller/music.controller.js")

router.post("/upload" , authArtist, upload.single("music") , create)

module.exports = router