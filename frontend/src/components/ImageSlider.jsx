import { useState, useEffect } from 'react';
import styled from 'styled-components';

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);


    
const images = ['https://picsum.photos/id/89/1000/800',
                'https://picsum.photos/id/44/100/800',
                'https://picsum.photos/id/33/1000/800',
                'https://picsum.photos/id/78/1000/800',
                'https://picsum.photos/id/87/1000/800',
                'https://picsum.photos/id/23/1000/800',
];

  const handleTransition = (newIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentIndex >= images.length - 3 ? 0 : currentIndex + 1;
      handleTransition(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  
  return (
    <StyledWrapper>
    <div className="slider-container">
      <div 
        className={`slider-track ${isTransitioning ? 'transitioning' : ''}`}
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="slider-image"
            style={{ backgroundImage: `url(${image})`}}
          />
        ))}
      </div>
    </div>
    </StyledWrapper>

  );
}

export default ImageSlider;


const StyledWrapper = styled.div`
.slider-container {
    width: 100%;
    max-width: 1200px;
    height: 400px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .slider-track {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    transition: none;
  }
  
  .slider-track.transitioning {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .slider-image {
    min-width: calc(33.333% - 20px);
    height: 100%;
    margin: 0 10px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  .slider-image:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
  
  .slider-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 2;
  }
  
  .slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
  }
  
  .slider-dot:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .slider-dot.active {
    background-color: white;
    transform: scale(1.2);
  }
  
  .slider-dot:not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }
  ` 


