const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: 'you must enter a firstname'
    },
    description: {
        type: 'string',
        required: 'enter a email'
    },
    type: {
        type: 'string',
    },
    media: {
        type:'string',
        ref: 'media'
    }

},{
    timestamps:true
});

module.exports = mongoose.model('Post', postSchema);
