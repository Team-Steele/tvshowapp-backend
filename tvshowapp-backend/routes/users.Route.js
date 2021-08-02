
const express = require('express');
router = express.Router();
usersRoute = require('../controllers/usersController');
const User = require("../../models/user-model")
const Comments = require('../../models/comment')

router.get('/', (req, res) => {
    res.send(`You've hit the home route!`)
});

router.get('/shows', (req, res) => {
    User.find({})
      .populate('opinion')
      .then((foundShows) => {
        console.log('route hit!');
        console.log(foundShows);
        res.json(foundShows);
      });
})

router.post('/users', (req, res) => {
    User.create(
        {
            user: req.body.user
        }
    )
    .then(shows => {
        console.log(shows)
        res.json(shows)
    })
})  

router.put('/users/:id', (req, res) => {
    const routeId = req.params.id;
  User.findOneAndUpdate({
    _id: routeId,
  },
  {
    $addToSet: {
        tvShows: req.body.tvShows
    }
  }, 
  {
      new: true
  }).then((shows) => {
    console.log(shows);
    res.json(shows);
  });
});   

module.exports = router;

