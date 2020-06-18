const mongoose = require('mongoose');

let clubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'you must enter a name'
    },
    introduction: {
        type: String,
        required: 'enter a team or \'aucune\''
    },
    picture: {
        type: String,
    },
    index : {
        type : Number,
    }
},{
    timestamps:true
});

clubSchema.pre('save', function(){
    return clubSchema.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})

module.exports = mongoose.model('Club', clubSchema);