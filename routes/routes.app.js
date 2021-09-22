const express = require('express')

const locationRouter = express.Router();
const locale = require('../models/info.model');
locationRouter.get("/", (req, res) => {
    res.send("Hi")
})
locationRouter.post("/save/:device/:latitude/:longitude", (req, res) => {

    let { device, latitude, longitude } = req.params;
    console.log(device);

    locale.insertMany({ deviceName: device, latitude: latitude, longitude: longitude }, (err, result) => {
        if (!err) {
            res.status(200).send({
                msg: "Published!",
                data: null
            });

        } else {
            console.log(err)
            res.status(500).send({
                msg: "Database error!",
                data: null
            })
        }
    })


})

module.exports = locationRouter;