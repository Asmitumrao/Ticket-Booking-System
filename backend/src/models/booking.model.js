import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    paymentStatus: {
        type: String, enum: ["pending", "paid"], default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);
