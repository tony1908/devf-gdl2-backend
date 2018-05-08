const mongoose = require("mongoose")

const VideosDB = mongoose.model("Video", {
    "image": { type: String, trim: true },
    "info": { type: String, trim: true },
    "name": { type: String, trim: true },
})

module.exports = VideosDB;

