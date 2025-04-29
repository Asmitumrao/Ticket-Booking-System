import express from 'express'; // Import express
import connectDB from "./config/db.js"// Import database connection
import {app} from "./app.js" // Import app from app.js
const PORT = process.env.PORT || 8000;




// Connect to MongoDB
connectDB()
.then(() =>{
    app.listen(PORT,() => {console.log(`🚀 Server running on port ${PORT}`)});
})

.catch((error) => { 
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure   
})