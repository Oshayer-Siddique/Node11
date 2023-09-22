// backend/index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();
const port = 5000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/" , (req,res)=>{
  res.send("DATA OK");
})


app.post("/api/save", (req, res) => {
  const { name, email, message } = req.body;

  console.log(req.body);


});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
