const mongoose = require('mongoose');

let mediaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'you must enter a name'
    },
    equipe: {
        type: String,
        required: 'enter a team or \'aucune\''
    },
    description: {
        type: String,
    },
    file: {
        type: String,
    },
    post: {
        // type: {}
        type:String,
        ref: 'Post'
    },

},{
    timestamps:true
});

module.exports = mongoose.model('Media', mediaSchema);