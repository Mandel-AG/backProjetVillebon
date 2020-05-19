const mongoose = require('mongoose');

let gymSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'you must enter a name'
    },
    adress : {
      type : String,
      required: ' yout must enter an adress'
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

gymSchema.pre('save', function(){
    return gymSchema.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})

module.exports = mongoose.model('Gym', gymSchema);