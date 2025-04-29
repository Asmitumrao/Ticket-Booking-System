import React from 'react';
import styled from 'styled-components';

const Card = ({image,category,heading,artist,date}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image" >
            <img src={image} alt="" />
        </div>
        <div className="category"> {category} </div>
        <div className="heading">{heading}
          <div className="author"> By <span className="name">{artist}</span> on {date}</div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    background: white;
    padding: .4em;
    border-radius: 6px;
  }

  .card-image {
    background-color: rgb(236, 236, 236);
    width: 100%;
    height: 300px;
    border-radius: 6px 6px 0 0;
    img{
      width: 100%;
      height: 100%;
      border-radius: 6px 6px 0 0;
      object-fit: cover;
    }
  }

  .card-image:hover {
    transform: scale(0.98);
  }

  .category {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    color: rgb(63, 121, 230);
    padding: 10px 7px 0;
  }

  .category:hover {
    cursor: pointer;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
  }

  .heading:hover {
    cursor: pointer;
  }

  .author {
    color: gray;
    font-weight: 400;
    font-size: 11px;
    padding-top: 20px;
  }

  .name {
    font-weight: 600;
  }

  .name:hover {
    cursor: pointer;
  }`;

export default Card;
