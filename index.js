const express = require("express");
const port = 8000;

const app = express();

app.use(express.json());

let resources = [
  { id: 1, name: "Html", email: "html@gmail.com", completed: true, points: 40 },
  { id: 2, name: "Css", email: "css@gmail.com", completed: true, points: 40 },
  {
    id: 3,
    name: "JavaScript",
    email: "javascript@gmail.com",
    completed: true,
    points: 40,
  },
];
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
