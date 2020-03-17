const mongoose = require('mongoose');

let mediaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'you must enter a firstname'
    },
    type: {
        type: String,
        required: 'enter a email'
    },
    chemin: {
        type: String,
    },
    post: {
        type:{},
        ref: 'Post'
    },

},{
    timestamps:true
});

module.exports = mongoose.model('Media', mediaSchema);