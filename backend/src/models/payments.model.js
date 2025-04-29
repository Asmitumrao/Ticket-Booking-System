import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ["credit_card", "paypal", "bank_transfer"],
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending"
    },},
     { timestamps: true });

module.exports = mongoose.model("Payment", PaymentSchema);