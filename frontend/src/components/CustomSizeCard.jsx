import React from 'react';
import styled from 'styled-components';


const CustomSizeCard = ({ images, height, width }) => {
  return (
    <StyledWrapper>
      <div className="custom-card" style={{ height: height, width: width }}>
        <div className="custon-card-content">
          <img src={images} alt="Card" className="custom-card-image" style={{ height: height, width: width }} />
          {/* <p className="custon-card-title">Card hover effect
    </p><p className="custom-card-para">Lorem ipsum dolor sit  */}
          {/* amet, consectetur adipiscing elit.</p> */}
        </div>
      </div>

    </StyledWrapper>

  )
}

export default CustomSizeCard


const StyledWrapper = styled.div`

.custom-card {
    width: 100%;
    height: 100%;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    border-radius: 8px;
    color: white;
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    cursor: pointer;
  }
  
  .custom-card-content {
    padding: 20px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
  
  .custom-card-content .custom-card-title {
    font-size: 24px;
    font-weight: 700;
    color: inherit;
    text-transform: uppercase;
  }
  
  .custom-card-content .custom-card-para {
    color: inherit;
    opacity: 0.8;
    font-size: 14px;
  }
  
  .custom-card:hover {
    transform: rotateY(10deg) rotateX(10deg) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .custom-card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1;
  }
  
  .custom-card:hover:before {
    transform: translateX(-100%);
  }
  
  .custom-card:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    z-index: 1;
  }
  
  .custom-card:hover:after {
    transform: translateX(100%);
  }
  
`