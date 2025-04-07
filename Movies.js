var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('dotenv').config();

mongoose.connect(process.env.DB)
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Movie schema
var MovieSchema = new Schema({

});

// return the model
module.exports = mongoose.model('Movie', MovieSchema);