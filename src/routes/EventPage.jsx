import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SelectedEvent from '../components/selected-event/SelectedEvent';

const EventPage = () => {
  const { etag } = useParams()  ;
  const eventName = (etag || "").replace(/-/g, ' ');  
  const event = useSelector((state) =>
    state.events.allEvents.find(e => e.title === eventName)
  );

 
  if (!etag || !event) {
    return null;
  }

  return (
    <div>
     <SelectedEvent eventData= {event}/>
    </div>
  );
};


export default EventPage;
