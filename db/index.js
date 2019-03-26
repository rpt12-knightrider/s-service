const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/3001';

const db = mongoose.connect(mongoUri);

module.exports = db;