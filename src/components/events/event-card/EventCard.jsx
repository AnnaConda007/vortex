import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = () => { 
    const urlTitle = title.replace(/\s+/g, '-');
    navigate(`/${urlTitle}`);
  };

  return <h2 onClick={handleClick}>{title}</h2>;
};

export default EventCard;
