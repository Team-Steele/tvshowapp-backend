const seedData = require('./user-seeds.json')
const User = require('../models/user-model')
const Comment = require('../models/comment')

User.deleteMany({})
  .then(() => {
    Comment.deleteMany({});
  })
  .then(() => {
    return Comment.create({
      comment: 'Waste of time!',
     
    });
  })
  .then((comments) => {
    return seedData.map((user) => {
      return ({ ...user, opinion: comments._id })
    });
  })
  .then((users) => {
    return User.insertMany(users);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });














// User.deleteMany({})
// .then(() => {
//     return User.insertMany(seedData)
// })
// .then(console.log)
// .catch(console.error)
// .finally(() => {
//     process.exit()
// })