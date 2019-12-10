const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Game = new Schema({
  game_name: {
    type: String
  },
  game_rating: {
    type: Number
  },
  plaftorm: {
    type: String
  },
  publisher: {
    type: String
  },
  release: {
    type: Date
  },
  game_status: {
    type: String
  }
}, {
  collection: 'games'
})

module.exports = mongoose.model('Game', Game)