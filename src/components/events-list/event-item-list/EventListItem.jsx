import React from 'react';
import { useNavigate } from 'react-router-dom';
import eventsListStyles from "../eventsList.module.css"
import styles from "./eventListItem.module.css"
import EventDate from '../../event-date/EventDate';

const EventListItem = ({event}) => {
  const { title, date_start,date_end ,location } = event
  const navigate = useNavigate();

  const handleClick = () => { 
    const urlTitle = title.replace(/\s+/g, '-');
    navigate(`/${urlTitle}`);
  };

  return (
 <div className={`${eventsListStyles.eventsRow } ${eventsListStyles.eventsList }` }>
  <div className={eventsListStyles.eventsItem}> 
<EventDate start={date_start} end={date_end}/>
   </div>
  <div className={`${eventsListStyles.eventsItem} ${styles.title}`} onClick={handleClick}>  {title} </div>
  <div className={`${eventsListStyles.eventsItem} ${styles.location}`}> {location} </div>
 </div>
  )
  
 
};

export default EventListItem;


