const mongoose = require('mongoose');

const DrugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const Drug = mongoose.model('Drug',DrugSchema);

module.exports = Drug;