
 require('dotenv').config({ path: 'ENC_FILENAME'});
 const express = require('express');
 const app = express();
 const cors = require('cors');
 
 
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 app.use(cors());
 
 app.use('/', require('./routes/users.Route'));

 app.use(methodOverride('_method'))
 app.set('port', process.env.PORT || 3001);
 
//  app.listen(3001, () => {
//    console.log('listening on port 3001');
//  });
app.listen(app.get("port"), () => {console.log(`listening on ${app.get("port")}`)})