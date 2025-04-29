
import Event from '../models/event.model.js'; // Assuming you have an Event model defined
import User from '../models/user.model.js'; // Assuming you have a User model defined
import { uploadImagesToCloud,deleteImageFromCloud } from '../utils/cloudinary.js'; // Assuming you have a cloudinary utility for uploading images

// Create a new event

// create , delete and update can be performed only by single user

const createEvent = async (req, res) => {
    try {
        const { title, description, location, date, price, availableSeats,tags } = req.body;
        if (!date || isNaN(Date.parse(date))) {
            return res.status(400).json({ message: "Invalid date format", success: false });
        }

        // console.log(typeof date);
        const userId = req.user._id; // Authenticated user's ID
        const files = req.files;
        let uploadedImagesUrl = [];

        // Upload images if any
        if (files && files.length > 0) {
            uploadedImagesUrl = await uploadImagesToCloud(files);
        }



        // Prepare event data
        const eventData = {
            title,
            description,
            location,
            date: new Date(date), // Convert date string to Date object
            price,
            tags,
            availableSeats,
            image: uploadedImagesUrl,
            organizer: userId,
        };
        // console.log("user id ->",userId);
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }


        // Save to database
        const event = await Event.create(eventData);
        if (!event) {
            return res.status(400).json({ message: "Event creation failed", success: false });
        }
        
       // Add the event ID to the user's myevents array
        user.myevents.push(event._id); // Push the event ID to the user's myevents array

        return res.status(201).json({
            message: "Event created successfully",
            success: true,
            eventId: event._id, // Use MongoDB _id
            eventData: event.toObject(), // Convert Mongoose document to plain object

        });
    } catch (error) {
        return res.status(500).json({ message: "Event creation failed", error: error.message ,success: false });
    }
};


//update an event
const updateEvent = async(req, res) => {
    const { id } = req.params; // Extracting the event ID from the request parameters
    const { title, description, location, date, price, availableSeats } = req.body;
    const files = req.files;
    let uploadedImagesUrl = [];

    // Upload images if any
    if (files && files.length > 0) {
        uploadedImagesUrl = await uploadImagesToCloud(files);
    }

    try {
        const event = await Event.findByIdAndUpdate(id, {
            title,
            description,
            location,
            date,
            price,
            availableSeats,
            image: uploadedImagesUrl,
        }, { new: true }).populate("organizer", "name email"); // Populate organizer details

        if (!event) {
            return res.status(404).json({ message: "Event not found", success: false });
        }
        return res.status(200).json({ message: "Event updated successfully", success: true, event });
    } catch (error) {
        return res.status(500).json({ message: "Failed to update event", error: error.message , success: false });
    }

}

// Delete an event
const deleteEvent = async(req, res) => {
    const { id } = req.params; // Extracting the event ID from the request parameters

    try {
        // delete files from cloudinary
        const event = await Event.findById(id); // Find the event by ID
        if (!event) {
            return res.status(404).json({ message: "Event not found", success: false });
        }
        // Delete images from Cloudinary
        await deleteImageFromCloud(event.image); 
        
        // removing the event from the user's myevents array
        const user = await User.findById(event.organizer); // Find the user by organizer ID
        if (user) {
            user.myevents = user.myevents.filter(eventId => eventId.toString() !== id); // Remove the event ID from the user's myevents array
            await user.save(); // Save the updated user document
        }
        // Delete the event
        await Event.findByIdAndDelete(id); // Delete the event from the database
       
        return res.status(200).json({ message: "Event deleted successfully", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Failed to delete event", error: error.message , success: false });
    }

}




export { createEvent, deleteEvent,updateEvent };


