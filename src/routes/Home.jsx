import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EventSelection from '../components/event-selection/EventSelection';
import EventsList from '../components/events/events-list/EventsList';
import EventPage from './Event';

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
