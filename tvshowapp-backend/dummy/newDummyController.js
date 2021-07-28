const express = require('express')
const router = express.Router()
const Dummy = require('../dummy/dummy-model')
const axios = require("axios").default;



//route to get the home page
router.get('/', (req, res) => {
    console.log("This is the Home Route for the Hawks")
    // res.render('home.hbs')
    res.json('whoa!!!')
})

module.exports = router 