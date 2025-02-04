const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  challengeTitle: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  duration: {
    type: Date,  
    required: true,
  },
  moneyPrize: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectBrief: {
    type: String,
    required: true,
  },
  projectDescriptionAndTasks: {
    type: String,
    required: true,
  },
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
