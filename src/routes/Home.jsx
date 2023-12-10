import React from 'react'; 
import EventSelection from '../components/event-selection/EventSelection';
import EventsList from '../components/events-list/events-list/EventsList';
import EventPage from './EventPage';

const HomePage = () => { 
  return (
    <>
      <EventSelection />
      <EventsList />
       <EventPage   />
    </>
  );
};

export default HomePage;
