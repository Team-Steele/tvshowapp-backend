
 require('dotenv').config({ path: 'ENV_FILENAME'});
 const express = require('express');
 const methodOverride = require('method-override')
 const app = express();
 const cors = require('cors');
 
 
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
 app.use(cors());
 
 app.use(methodOverride('_method'))
 app.use('/', require('./routes/users.Route'));



 app.set('port', process.env.PORT || 3001);
 
//  app.listen(3001, () => {
//    console.log('listening on port 3001');
//  });
app.listen(app.get("port"), () => {console.log(`listening on ${app.get("port")}`)})

