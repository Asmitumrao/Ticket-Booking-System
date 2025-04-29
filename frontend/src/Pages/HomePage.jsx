import React from 'react'
import ImageSlider from '../components/ImageSlider.jsx'
import Login from '../components/Login.jsx';
import styled from 'styled-components';
const HomePage = () => {

  return (
    <StyledWrapper>
      <div className='home-page'>
        <div className="video-container">
          <video
            className="video-bg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src='assets/coverVideo.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="overlay-content">
            <h1>HELLO THERE...</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem distinctio
              voluptas rerum deleniti dicta magni nihil voluptatibus voluptatem officiis.
            </h2>
          </div>
        </div>
        <div className='gallery-box'>
          <div className='gall-text'>
            <h1>
              Lorem ipsum dolor sit amet.
            </h1>
            <h2>
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
          <div className='gall-images'>
            <ImageSlider />
          </div>

        </div>
      </div>
    </StyledWrapper>
  )
}

export default HomePage;




const StyledWrapper = styled.div`
.home-page{
  height:200vh;
  /* position: relative; */
  
  
  
  .video-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    
    .video-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    
    .overlay-content {
      position: relative;
      height: 100%;
      color: white;
      display: flex;
      gap:20px;
      flex-direction: column;
      justify-content:end; 
      align-items:start;
      /* text-align: center; */
      padding: 2rem;
      background-color: rgba(0, 0, 0, 0.3); /* Optional overlay */
      
      
      h1{
        font-family: "Rubik Glitch", system-ui;
        letter-spacing: -3px;
        font-size: 50px;
      }
      
      h2{
        
        font-family: "Rubik Glitch", system-ui;
        
      }
    }
  }

  .gallery-box{
    /* margin-top: -20px; */
  
    padding: 20px;
    overflow: hidden;
    height: 100vh;
    width: 100vw;

    .gall-text{
      height: 50%;
      color:white;
      display: flex;
      flex-direction: column;
      align-items: space-evenly;
      justify-content: space-evenly;
      text-align: center;
      


      h1{
        font-size: 100px;
      }
      h2{
        font-size: 60px;
      }
    }
  }












}`


