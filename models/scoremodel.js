const mongoose = require('mongoose');


let scoreSchema = new mongoose.Schema({
    pointsA: {
        type: Number,
        required: 'Enter a score A'
    },
    pointsB : {
        type : Number,
        required : 'Enter a score B'
    },
    equipeA: {
        type: String,
        required: 'enter a team'
    }, 
    equipeB: {
        type: String,
        required: 'enter a team'
    },
    result : {
        type : String,
        required : 'Enter the result'
    }
},{
    timestamps:true
});


module.exports = mongoose.model('Score', scoreSchema);




