const { Schema, model } = require('mongoose');

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true 
  },

  password: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
    default: 'anonymous'
  },

  avatarUrl: {
    type: String,
  },
});

module.exports = model('User', schema);
