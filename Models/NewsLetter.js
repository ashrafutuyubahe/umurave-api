// models/newsletterModel.js

const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  }
}, { timestamps: true });

const newsletterModel=mongoose.model('Newsletter', newsletterSchema);

module.exports = newsletterModel;
