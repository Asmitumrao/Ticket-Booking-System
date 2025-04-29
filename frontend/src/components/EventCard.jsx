import React from 'react';
import styled from 'styled-components';

const EventCard = ({ image , description }) => {
  return (
    <StyledWrapper>
    <div class="event-card">
      <div class="card-inner">
        <div class="card-front">
          <img src={image} alt="image" />
        </div>
        <div class="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
    </StyledWrapper>
    
  )
}

export default EventCard




const StyledWrapper = styled.div`

.event-card {
  width: 300px;
  height: 400px;
  perspective: 1000px;
  /* margin: 20px; */
  
  .card-inner {
      width: 100%;
      height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
}

&:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
box-shadow: 3px 3px 10px 5px rgb(39, 24, 54);
}

.card-front {
/* background-color: #6A2C70; */
/* box-shadow: 3px 3px 10px 5px rgb(39, 24, 54); */
color: #fff;
display: flex;
align-items: center;
/* border: 10px solid #6A2C70; */
border-radius: 10px;
justify-content: center;
font-size: 24px;
transform: rotateY(0deg);

img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    
}
}

.card-back {
/* background-color: #F08A5D; */
color: #fff;
display: flex;
align-items: center;
/* border: 10px solid #F08A5D; */
border-radius: 10px;
justify-content: center;
font-size: 24px;
transform: rotateY(180deg);
}

}
`