import { asyncHandler } from '../utils/asyncHandler.js';
import  User  from '../models/user.model.js';
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from '../utils/email.js';

const registerUser = async (req, res) => {

    // get user data from request body
    console.log("Incoming Register Payload:", req.body);
    const { name, email, password, phone } = req.body;

    // validate user data
    if ([name, email, password, phone].some((field) => typeof field !== 'string' || field.trim() === '')) {
        return res.status(400).json({ message: 'All fields must be non-empty strings', success: false });
        // return res.status(200).json({ message: 'All fields must be non-empty strings', success: false });
    }

    try {

        // check if user already exists
        const isExists = await User.findOne({
            $or: [{ email }, { phone }] // Correct $or syntax
        });

        if (isExists) {
            return res.status(400).json({ message: 'User already exists', success: false });
            // return res.status(200).json({ message: 'User already exists' ,success: false });

        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            phone,
        });
        // save user to database
        await user.save();



        const token = jwt.sign({ id: user._id }, process.env.JWT_EMAIL_VERIFICATION, { expiresIn: "1d" });
        await sendVerificationEmail(user.email, token);
        // send verification email
        res.status(201).json({ message: 'Registration successful, check your email to verify', success: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message, success: false });
    }
};



// verify email
const verifyEmail = asyncHandler(async (req, res) => {
    const { token } = req.query;
    if (!token) {
        return res.status(400).json({ message: 'Token is required', success: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_EMAIL_VERIFICATION);
        const user = await User.findById(decoded?.id).select("-password -createdAt -updatedAt -__v");
        if (!user) return res.status(404).json({ message: "User not found", success: false });
        if (user.isVerified) return res.status(200).json({ message: "Email already verified", success: true });
        user.isVerified = true;
        await user.save();
        return res.status(200).json({ message: "Email verified successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
})

// login user 
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log("Incoming Login Payload:", req.body);

    try {
        const user = await User.findOne({ email }).select("-createdAt -updatedAt -__v -refreshToken");
        console.log(user);
        if (!user) return res.status(401).json({ message: 'User Not Found', success: false });
        if (!user.isVerified) return res.status(403).json({ message: 'Email not verified', success: false });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials', success: false });
        user.password = undefined; // remove password from user object  
        const token = jwt.sign({ user }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '1h' });

        // Set token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,// true in production with HTTPS;
            maxAge: 60 * 60 * 1000, // 1 hour
        });

        res.status(200).json({ message: 'Login successful', success: true, user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err.message, success: false });
    }
};



// logout user

const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully', success: true });
};


// get user data
const getUser = (req, res) => {
    res.status(200).json({ message: "User is authenticated", success: true, user: req.user });
}

export {
    registerUser,
    loginUser,
    logout,
    verifyEmail,
    getUser
}















































