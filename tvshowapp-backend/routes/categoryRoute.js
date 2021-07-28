const express = require("express")
router = express.Router()
categoryRoute = require('../controllers/categoryControllers')

router.get('/', categoryRoute.categoryController)


module.exports=router 