var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CircuitSchema = new Schema({
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
  receptacle: {
    type: String,
    required: true
  },
  pdu: {
    type: String,
    required: true
  },
  panel: {
    type: String,
    required: true
  },
  breaker1: {
    type: Number,
    required: true
  },
  breaker2: {
    type: Number
  },
  breaker3: {
    type: Number
  }
});

var Circuit = mongoose.model("Circuit", CircuitSchema);

module.exports = Circuit;