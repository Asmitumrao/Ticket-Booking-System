import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import eventRouter from "./routes/event.routes.js";

const app = express()
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://eventbookingsystem-nine.vercel.app",
    "https://eventbookingsystem-git-main-asmit-umraos-projects.vercel.app"
  ],
  credentials: true
}));

app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})
// routes declararion 
app.use('/api/v1/auth', userRouter);
app.use('/api/v1/events', eventRouter);


// app.use('api/v1/events', eventRouter);
// app.use('/api/v1/home', homeRouter);
// app.use('api/v1/profile', profileRouter);


export {app} // export app for use in index.js








