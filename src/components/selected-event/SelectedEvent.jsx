import styles from "./selectedEvent.module.css" 
import EventDate from "../events-list/event-card/event-date/EventDate"
const SelectedEvent = ({eventData})=>{ 
  const {title, location, description,url,date_start,date_end,ticket_price} = eventData

   return (
    <div className={styles.selectedEventModal}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.mainInfo}>
        <a href={url}   rel="noopener noreferrer">
          <EventDate start={date_start} end={date_end} horizontally={true}/>
        </a>
        <div className={styles.locationContainer}>
          <a href={url}   rel="noopener noreferrer">
            <img  className={styles.imgGeo} src="public/images/geoLocation.png" alt="геолокация" />
            <span className={styles.location}>{location}</span>
          </a>
        </div>
      </div>
      <p className={styles.description}>
        {description}
      </p>
      <a href={url} className={styles.linkToEvent}> перейти на сайт {title}</a>
    </div>
  );

}

export default SelectedEvent