var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/cabs", { useNewUrlParser: true });

// Routes
// db.Cab.create({
//   site: "CLT1", 
//   location: "A-1", 
//   customerName: "TestCustomer", 
//   power: [
//     {
//       pdu: "A1", 
//       panel: "1", 
//       breaker1: "1",
//       recepticle: "L5-20"
//   }]
// })

app.get("/", function(req, res) {
res.send("/index.html");
})

app.post("/add", function(req, res){
  console.log(req.body)
  db.Cab.create(req.body).then(function(doc){
    res.json(doc);
  }
)
});

app.get("/cabs/:searchBy/:searchParam", function(req, res){
  let query = {};
  query[req.params.searchBy] = req.params.searchParam;
  db.Cab.find(query).then(function(docs){
    res.json(docs);
  })
})

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
