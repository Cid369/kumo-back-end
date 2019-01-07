const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
  tag: {
    type: String
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Collection', collectionSchema)
