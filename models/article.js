const mongoose = require("mongoose")

const Schema = mongoose.Schema

var articleSchema = new Schema({
  nytId: {
    type: String,
    required: true
  }
  title: {
    type: String,
    required: true
  },
  URL: {
    type: String,
    required: true
  },
  savedDate: {
    type: Date,
    default: new Date(),
    required: true
  },
  pubDate: {
    type: Date
  },
  category: {
    type: String
  }
})

// Create the Model
const Article = mongoose.model("Article", articleSchema)

module.exports = Article
