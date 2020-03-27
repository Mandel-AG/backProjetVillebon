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