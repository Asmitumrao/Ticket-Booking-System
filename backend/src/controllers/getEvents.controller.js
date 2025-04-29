
import Event from '../models/event.model.js'; // Assuming you have an Event model defined


// get all events
const getAllEvents = (req,res)=>{

    Event.find({}).populate('organizer').then((events)=>{
        if(!events){
            return res.status(404).json({message:"No events found",success:false})
        }
        return res.status(200).json({message:"Events fetched successfully",success:true,events})
    }).catch((err)=>{
        return res.status(500).json({message:"Error fetching events",error:err.message})
    })
}

// get event by id
const getEvent = (req,res)=>{
    const { id } = req.params; // Extracting the event ID from the request parameters

    Event.findById(id).populate("organizer").then((event)=>{
        if(!event){
            return res.status(404).json({message:"Event not found",success:false})
        }
        return res.status(200).json({message:"Event fetched successfully",success:true,event:event.toObject({ getters: true })});
    }).catch((err)=>{
        return res.status(500).json({message:"Error fetching event",error:err.message,success:false})
    })

}

// get event by category
const getEventByCategory = (req,res)=>{
    const { category } = req.params; // Extracting the event ID from the request parameters

    Event.find({tags:category}).populate("organizer").then((events)=>{
        if(!events){
            return res.status(404).json({message:"No events found",success:false});
        }
        const eventsByCategory = events.filter(event => event.tags.includes(category));
        return res.status(200).json({message:"Events fetched successfully",success:true,events:eventsByCategory});
    }).catch((err)=>{
        return res.status(500).json({message:"Error fetching events",error:err.message,success:false})
    }) 
}


export { getAllEvents, getEvent, getEventByCategory };
