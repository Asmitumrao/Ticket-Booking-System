import {Router} from 'express';

import { createEvent, deleteEvent,updateEvent } from '../controllers/event.controller.js';
import {getAllEvents,getEvent,getEventByCategory} from '../controllers/getEvents.controller.js';
import authenticate from '../middlewares/authenticate.js';
import { uploadSingle,uploadMultiple } from '../middlewares/multer.js';
const router = Router();





router.post('/create-event',authenticate,uploadMultiple("image"),createEvent); // Create a new event
router.delete('/delete-event/:id', deleteEvent); // Delete an event
router.put('/update-event/:id', updateEvent);  // Update an event


router.get('/get-all-events', getAllEvents); // Get all events
router.get('/get-event/:id', getEvent); // Get event by ID
router.get("/get-event-by-category/:category", getEventByCategory); // Get event by category







export default router;


