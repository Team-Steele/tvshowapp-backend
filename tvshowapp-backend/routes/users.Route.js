const express = require('express');
router = express.Router();
usersRoute = require('../controllers/usersController');
const User = require("../../models/user-model")

router.get('/', (req, res) => {
    res.send(`You've hit the home route!`)
});

router.get('/shows', (req, res) => {
    User.find({})
    .then(foundShows => {
        console.log('route hit!')
        console.log(foundShows)
        res.json(foundShows)
    })
})

// router.post('/users',( req, res ) => {
//    const user = req.body.
//    console.log(req)
//    const tvShow = req.body.tvShow
//    console.log(tvShow)
//    const newUser = new User({
//        user,
//        tvShow
//    })
//     newUser.save()
//     console.log(newUser)
 
// })

router.post('/users', (req, res) => {
    User.create(
        {
            user: req.body.user,
            tvShows: req.body.tvShows
        }
    )
    .then(shows => {
        console.log(shows)
        res.json(shows)
    })
})   

module.exports = router;
