const Event = require('../models/eventmodel')



exports.getEventsQuery = () =>{
    return Event.find({}).exec()
}


// exports.searchEventQuery = (query) =>{
//     return Event.find({title: new RegExp(query, 'i')}).exec()
// }


exports.createEventQuery = (event) =>{
    return event.save()
}

exports.deleteEventQuery = (eventId) =>{
    return Event.findByIdAndDelete(eventId).exec()
}


exports.updateEventQuery = (eventId, newEvent) =>{
    return Event.findByIdAndUpdate(eventId, 
        {$set: newEvent}, {runValidators:true}).exec()
}
