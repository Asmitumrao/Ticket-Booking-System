/* eslint-disable no-unused-vars */

import { useState, useEffect,useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

function NavBar() {
  const {user}= useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // console.log("user->",user);
  return (
    <StyledWrapper>
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-logo">
          <a href="/">Logo</a>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Event</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/organise">Organise</Link></li>
          {user!=null? (
            <li><Link to="/profile">Profile</Link></li>
          ) : (
            <li><Link to="/signup">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
    </StyledWrapper>
  );
}

export default NavBar;


const StyledWrapper = styled.div`
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
    z-index: 1000;
    background-color: transparent;
  }
  
  .navbar.scrolled {
    background-color: #000;
    padding: 15px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .nav-logo a {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin-left: 30px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #646cff;
  }`



