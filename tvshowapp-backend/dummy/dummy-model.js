const mongoose = require('../dummy/connection')

const dummySchema = new mongoose.Schema({

    name: String,
    jersey: {type: Number},
    points: {type: Number},
    rebounds: {type: Number},
    assists: {type: Number},
})

const Dummy = mongoose.model('dummy', dummySchema)

module.exports = Roster