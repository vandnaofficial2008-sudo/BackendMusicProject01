require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const router1 = require("./routes/auth.routes.js")
const router2 = require("./routes/music.routes.js")
const router3 = require("./routes/album.routes.js")
const router4 = require("./routes/getMusic.routes.js")
const router5 = require("./routes/logout.routes.js")

const app = express()

app.use(express.json()) //middleware
app.use(cookieParser()) //middleware

app.use("/auth/spotify" , router1)
app.use("/create/music" , router2)
app.use("/create/album" , router3)
app.use("/get/music" , router4)
app.use("/auth/spotify" , router5)

module.exports = app