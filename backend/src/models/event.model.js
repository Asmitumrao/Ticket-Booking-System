import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    image: {
        type: [String],
        required: [true, "Please upload at least one image"],
      },
    title: {
        type: String,
        required: [true, "Please provide a title"],
        maxlength: [100, "Title can not be more than 100 characters"],
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        maxlength: [500, "Description can not be more than 500 characters"],
    },
    date: {
        type: Date,
        required: [true, "Please provide a date"]
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
        min: [0, "Price can not be less than 0"]
    },
    availableSeats: {
        type: Number,
        required: [true, "Please provide available seats"],
        min: [0, "Available seats can not be less than 0"]
    },
    location: {
        type: String,
        required: [true, "Please provide a location"],
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tags: [{
        type: String,
    }],
}, { timestamps: true });

export default mongoose.model("Event", EventSchema);
