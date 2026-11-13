const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    uri : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    artist : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userData",   // all info of artist stored in -> userData 
        required : true
    }
})

const musicModel = mongoose.model("musicInfo" , musicSchema)

module.exports = musicModel