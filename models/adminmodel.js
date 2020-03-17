const mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: 'enter a email'
    },
    password: {
        type: 'string',
        required: 'enter a password'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Admin', adminSchema);
