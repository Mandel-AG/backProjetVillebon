const mongoose = require('mongoose');

let eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'you must enter a title'
    },
    content: {
        type: String
    },
    picture: {
        type: String,
        ref: 'media'
    },
    date :{
        type: Date
    },
    index : {
        type : Number,
    }
},{
    timestamps:true
});


eventSchema.pre('save', function(){
    return eventSchema.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})

module.exports = mongoose.model('Event', eventSchema);
