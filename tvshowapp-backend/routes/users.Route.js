const express = require('express');
router = express.Router();
usersRoute = require('../controllers/usersController');

router.get('/', usersRoute.usersController);
router.post('/',( req, res ) => {
    console.log('here!')
    console.log(req)
})

module.exports = router;
