const seedData = require('./data.seeds.json')
const Dummy = require('./dummy-model')

Dummy.deleteMany({})
.then ( () => {
    return Dummy.insertMany(seedData)
})
.then(console.log)

.catch(console.error)

.finally(() => {
    process.exit()
})