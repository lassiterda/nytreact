const mongoose = require("mongoose")

const Schema = mongoose.Schema

var articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  URL: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date(),
    required: true
  }
})

// Create the Model
const Click = mongoose.model("Click", ClickSchema)

module.exports = CLick
