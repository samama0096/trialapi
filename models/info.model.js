const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Locale = Schema({
    deviceName: {
        type: String,
        required: true,

    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Locale", Locale);