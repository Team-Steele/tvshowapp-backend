const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set("port"|| 3000)

app.get('/', (req, res) => {
    res.send("This is the home route ")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})

