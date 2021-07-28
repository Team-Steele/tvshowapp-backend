const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.set('port', process.env.PORT || 3001);
app.use('/users/', require('./routes/users.Route'));

app.listen(3001, () => {
  console.log('listening on port 3001');
});
