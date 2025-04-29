import React from 'react'
import EventCard from '../components/EventCard.jsx'
import CustomSizeCard from '../components/CustomSizeCard.jsx'
import InfoCard from '../components/InfoCard.jsx'
import styled from 'styled-components';



const events = [
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGV2ZW50JTIwY29tcGFueXxlbnwwfHx8fDE2ODI3NjQ4NTg&ixlib=rb-4.0.3&q=80&w=400",
    description: "Event 1"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGV2ZW50JTIwY29tcGFueXxlbnwwfHx8fDE2ODI3NjQ4NTg&ixlib=rb-4.0.3&q=80&w=400",
    description: "Event 2"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGV2ZW50JTIwY29tcGFueXxlbnwwfHx8fDE2ODI3NjQ4NTg&ixlib=rb-4.0.3&q=80&w=400",
    description: "Event 3"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGV2ZW50JTIwY29tcGFueXxlbnwwfHx8fDE2ODI3NjQ4NTg&ixlib=rb-4.0.3&q=80&w=400",
    description: "Event 3"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGV2ZW50JTIwY29tcGFueXxlbnwwfHx8fDE2ODI3NjQ4NTg&ixlib=rb-4.0.3&q=80&w=400",
    description: "Event 3"
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGV2ZW50JTIwY29tcGFueXxlbnwwfHx8fDE2ODI3NjQ4NTg&ixlib=rb-4.0.3&q=80&w=400",
    description: "Event 3"
  }
]

const Events = () => {
  return (
    <StyledWrapper>
    <div className='events-page'>
      <div className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Check out our upcoming events and join us!</p>
        <div className="upcoming-event-content">
          <div className="upcoming-event-container">
            {events.map((event, index) => (
              <EventCard key={index} image={event.image} description={event.description} />
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      <div style={{ height: '100px' }} />
      {/* -------------------------------------------------- */}

      <div className="past-events">
        <h2>Past Events</h2>
        <p>Check out our past events and see what we have done!</p>
        <div className="past-event-content">
          <div className="past-event-container">
            {events.map((event, index) => (
              <CustomSizeCard key={index} images={event.image} />
              // <EventCard key={index} image={event.image} description={event.description} />
            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      <div style={{ height: '100px' }} />
      {/* -------------------------------------------------- */}

      <div className="info-cards-section">
        <h2>Event Information</h2>
        <p>Check out our event information and see what we have done!</p>
        <div className="info-card-content">
          <div className="info-card-container">
            {events.map((event, index) => (
              <InfoCard key={index} image={event.image} category="Event" heading="Event Heading" artist="Artist Name" date="Date" />
            ))}
          </div>
        </div>
      </div>

    </div>

    </StyledWrapper>
  )
}

export default Events;



const StyledWrapper = styled.div`
.events-page{
    color:white;
    padding-top: 100px;
    padding-inline: 50px;
    min-height: 100vh;

    background-color: rgb(33, 32, 32);

    .upcoming-events{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 10px;
        padding: 5px;


        .upcoming-event-content{
            display: flex;
            padding: 5px;
            flex-direction: column;
            align-items:start;
            justify-content: start;
            gap: 20px;
            overflow:scroll;
            scrollbar-width: none; /*Firefox */
        
        .upcoming-event-content::-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }   

            
            .upcoming-event-container{
                display: flex;
                gap:20px;
                flex-direction: row;
                align-items: center;
                justify-content: center;
           
            }
        }
    }

    .past-event-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        /* grid-template-rows:1fr 1fr; */
        grid-gap: 20px;

    }

    .info-cards-section{
        color:red;

        .info-card-container{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap:20px;

        }


    }



}
`