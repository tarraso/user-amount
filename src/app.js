const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const userRoute = require('./routes/user');
require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: false }))

app.use(userRoute);
// Run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
