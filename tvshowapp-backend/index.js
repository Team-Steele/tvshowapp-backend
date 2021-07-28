const express = require('express');
const app = express();
const cors = require('cors');


// const dummyController = require('./controllers')




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get("/", function(req, res){
  res.send("Express Here!!!")
})
app.use('/users/', require('./routes/users.Route'));


app.use("/category", require("./routes/categoryRoute"))

app.listen(3001, () => {
  console.log('listening on port 3001');
});
 