import React from 'react'
// import './App.css'
import {Routes,Route} from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import Events from './Pages/Events.jsx';
import EventsDetails from './Pages/EventsDetails.jsx';
import BookingSuccess from './Pages/BookingSuccess.jsx';
import Contact from './Pages/Contact.jsx';
import Organise from './Pages/Organise.jsx';
import Profile from './Pages/Profile.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';








function App() {
  return (
  <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventsDetails />} />
          <Route path="/success" element={<BookingSuccess />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/organise' element={<Organise/>}/>
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </AuthProvider>
  </>
  )
}

export default App