const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  dataHolderBrandId: {
    type: String
  },
  interimId: {
    type: String,
  },
  brandName: {
    type: String,
    required: true
  },
  publicBaseUri: {
    type: String,
    required: true
  },
  logoUri: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: String,
    required: true
  },
  abn: {
    type: String
  },
  acn: {
    type: String,
  },
  arbn: {
    type: String,
  },

  
});

module.exports = mongoose.models.User || mongoose.model('bank', UserSchema);