const express = require('express');
const app = express();
const cors = require('cors');

<<<<<<< HEAD

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.set('port', process.env.PORT || 3001);
app.use('/', require('./routes/users.Route'));
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/users/', require('./routes/users.Route'));
>>>>>>> a51a5a8 (got the frontend talking to the backend)

app.listen(3001, () => {
  console.log('listening on port 3001');
});
