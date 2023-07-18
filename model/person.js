const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
    first_name: String,
    last_name: String,
    country: String,
    gender: String
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;