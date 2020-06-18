const Event = require('../models/eventmodel');
const Media = require('../models/mediamodel');
const{getEventsQuery, updateEventQuery, createEventQuery, deleteEventQuery } = require('../queries/event.queries')


exports.getEvent = async (req,res, next) => {
    try{
        const events = await getEventsQuery()
        res.render('events',{events});
    }
    catch(e){
        next(e);
    }
}


// exports.filteredevents = async(req,res, next)=>{
//     try{
//         let filtre = req.params.type
//         console.log(filtre, 'filtre')
//         const events = await getFilteredevent(filtre)
//         res.render('events', {events, filtre:filtre})
//     }
//     catch(e){
//         next(e);
//     }
// }



exports.createEvent = async (req,res, next)=>{
    try{
        const url = req.protocol + '://' + req.get('host');
        let event = new Event({
            title:req.body.title,
            content:req.body.content,
            date:req.body.date,
            picture: url + '/events/' + req.file.filename,
        })
        console.log(event.picture)
        console.log(req.protocol)
        const media = new Media ({
            _id: event._id,
            name: event.title,
            mediaType: 'event' ,
            team : 'aucune',
            description : req.body.description,
            picture : req.file.filename
        })
        await media.save()
        await createEventQuery(event)
       res.redirect('/events/add');
    }
    catch(e){
       next(e); 
    }
}


exports.updateEvent = async(req,res, next) =>{
    try{
    const newEvent = req.body;
    const eventId = req.params.id;
        await updateEventQuery(eventId, newEvent)
        res.redirect('/events');
    }
    catch(e){
        next(e);
    }
}


// Delete 1 event
exports. deleteEvent = async (req,res, next)=>{
    try{
        const eventId = req.params.id;
        await deleteEventQuery(eventId)
        const events = await getEventsQuery()
        res.render('partials/events-list', {events});
    }
    catch(e){
        next(e);
    }
}

// exports.eventSearch = async(req,res, next)=>{
//     try{
//         const eventQuery = req.query.reqt;
//         const events = await searchEventQuery(eventQuery)
//         res.render('partials/events-list', {events} );
//     }
//     catch(e){
//         next(e);
//     }
// }



exports.editEvent = async(req, res, next)=>{
    try{ 
        const event = await Event.findById({_id :req.params.id}).exec()
        res.render('updateevent', {event});
    }
    catch(e){
        next(e);
    }
}
