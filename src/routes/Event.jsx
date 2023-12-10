import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EventPage = () => {
  const { etag } = useParams();
  const eventName = etag.replace(/-/g, ' ');
  const event = useSelector((state) =>
    state.events.allEvents.find(e => e.title === eventName)
  );

  if (!etag) {
    return null;
  }
  return (
    <div>
      <h1>{event.title}</h1>
    </div>
  );
};

export default EventPage;
