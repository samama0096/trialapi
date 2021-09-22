const express = require('express')
const app = express();
const async = require('async');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const localeRoute = require('./routes/routes.app.js')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


dotenv.config();
async function connect() {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("connected to mongo");

    })
}
connect().then(() => {
    console.log("conected")
}).catch(e => console.log(e));
app.use("/post", localeRoute)
app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})
app.listen(process.env.PORT || 4000, () => {
    console.log(" ruing")
})