const express = require("express")
const router = express.Router()
const {register , loginUser} = require("../controller/auth.controller.js")
const {authArtist} = require("../middlewares/auth.middleware.js")

router.post("/register" , register)

router.post("/loginUser" , authArtist , loginUser)

module.exports = router