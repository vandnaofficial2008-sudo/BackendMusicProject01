const userModel = require("../models/user.model.js")

async function logout(req,res)
{
    res.clearCookie("token")
    res.status(200).json({
        message : "User logged-out successfully!"
    })

    // only logged-out -> can log-in again
}

module.exports = logout