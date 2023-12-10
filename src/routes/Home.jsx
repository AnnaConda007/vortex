import React from 'react';  
import EventsList from '../components/events-list/events-list/EventsList';
import EventPage from './EventPage';
import HeroEvents from '../components/hero-events/HeroEvents';
const HomePage = () => { 
  return (
    <>
    <HeroEvents/>
      <EventsList />
       <EventPage   />
    </>
  );
};

export default HomePage;
