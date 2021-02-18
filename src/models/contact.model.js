const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }, 
    gender: {
        type: String,
        required: true
    }, 
    favorite: {
        type: Boolean,
        required: true
    },
    contact: {
        type: [{_type: String, no: String}],
        required: false
    } 
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact