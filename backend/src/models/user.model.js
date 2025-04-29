import mongoose from "mongoose";
// import jwt from "jsonwebtoken"; // Import jwt for token generation
// import bcrypt from "bcrypt"; // Import bcrypt for password hashing

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        maxlength: [50, "Name can not be more than 50 characters"],
    },
    email:
        { type: String, unique: true },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Password can not be less than 6 characters"],
    },
    bookings:[
        { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    ],
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
        unique: true,
        maxlength: [15, "Phone number can not be more than 15 characters"],
    },
    refreshToken: {
        type: String,
        default: null,
    },
    profilePic: {
        type: String,
        default: null, 
    },
    myevents: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    ],
    isVerified: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true });

// // hashing the password before storing--
// UserSchema.pre("save", async ()=>{
//     // if(!this.isModified("password")){
//     //     return next()
//     // }
//     // this.password = await bcrypt.hash(this.password, 10)
// })


// UserSchema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };

// UserSchema.methods.generateAccessToken = function() {
//     return jwt.sign(
//         {
//             // payload: 
//                 id: this._id,
//                 name: this.name,
//                 email: this.email,
//         },
//     process.env.JWT_ACCESS_TOKEN,
//     {
//         expiresIn: "1d",
//     }
//     )
// };

// UserSchema.methods.generateRefreshToken = function(){
//     return jwt.sign(
//         {
//             id: this._id,
//         },
//         process.env.JWT_REFRESH_TOKEN,
//         {
//             expiresIn: "30d",
//         }
//     )
// }


export default mongoose.model("User", UserSchema);
