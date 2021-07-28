const mongoose = require('mongoose');



mongoose.connect(
  'mongodb://localhost/project-3',
  {
    useNewUrlParser: true,
  },
  { useUnifiedTopology: true }
);

mongoose.Promise = Promise;

module.exports = mongoose;

// const mongoURI =
//   process.env.NODE_ENV === 'production'
//     ? process.env.DB_URL
//     : 'mongodb://localhost:3001/users', {useNewUrlParser: true}

// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then((instance) =>
//     console.log(`Connected to db: ${instance.connections[0].name}`)
//   )
//   .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;
