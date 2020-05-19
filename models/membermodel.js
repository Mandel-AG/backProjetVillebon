const mongoose = require('mongoose');

let memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'you must enter a name'
    },
    lastName: {
        type: String
    },
    role : {
      type : String,
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

memberSchema.pre('save', function(){
    return memberSchema.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})

module.exports = mongoose.model('Member', memberSchema);