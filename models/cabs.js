var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CabSchema = new Schema({
  site: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  customerName: {
      type: String,
      default: "Available"
  },
  power: {
    type: [],
    default: undefined
  }
});

var Cab = mongoose.model("Cab", CabSchema);

module.exports = Cab;
