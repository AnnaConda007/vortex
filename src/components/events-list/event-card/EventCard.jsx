import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../eventsList.module.css"
import EventDate from './event-date/EventDate';
const EventCard = ({event}) => {
  const { title, date_start,date_end ,location } = event
  const navigate = useNavigate();

  const handleClick = () => { 
    const urlTitle = title.replace(/\s+/g, '-');
    navigate(`/${urlTitle}`);
  };

  return (
 <div className={`${styles.eventsRow } ${styles.eventsList }` }>
  <div className={styles.eventsItem}> 
<EventDate start={date_start} end={date_end}/>

   </div>
  <div className={styles.eventsItem} onClick={handleClick}>  {title} </div>
  <div className={styles.eventsItem}> {location} </div>
 </div>
  )
  
 
};

export default EventCard;
