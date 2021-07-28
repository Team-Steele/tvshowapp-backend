const express = require("express")
router = express.Router()
dummyRoute = require('../controllers/dummyControllers')

router.get('/', dummyRoute.dummyController)

// router.get('/dummy', (req, res) => {
//     console.log('this is the dummy route')
//     //how to render 
// })

module.exports = router