const express = require("express")
const logout = require("../controller/logout.controller.js")

const router = express.Router()

router.post("/logout" , logout)

module.exports = router