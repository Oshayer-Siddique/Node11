// backend/index.js
const express = require("express");
const bodyParser = require("body-parser");

const cors = require('cors');
const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/Node11", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

const app = express();
const port = 5000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));



////////////////////////

const peopleSchema = new mongoose.Schema({
  name: {
      type : String,
      unique:true,

  },
  email : {
      type : String,
  },
  message : {
      type : String,
  }
})


const People = mongoose.model("People",peopleSchema);

//module.exports = People;


///////////////////////////////////


app.get("/" , (req,res)=>{
  res.send("DATA OK");
})

let peoplearray = [];


app.post("/api/save", async (req, res) => {
  const { name, email, message } = req.body;

  const new_P = new People({
    name,
    email,
    message,
  });

  //await new_P.save();

  // /res.send("Data saved");
  //res.send("OK");

  peoplearray.push(req.body.name,req.body.message);


  

  res.send("Ok");

  console.log(peoplearray);


});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
