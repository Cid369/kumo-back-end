const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  key: {
    type: String
  },
  tag: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Collection', collectionSchema)
