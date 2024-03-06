const express = require("express");
const bodyParser = require("body-parser");
const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
module.exports = app;
