import React from 'react'
import styles from './evenCard.module.css'
import EventDate from '../../event-date/EventDate'

const EventCard = ({ event }) => {
  const { title, location, description, url, date_start, date_end, ticket_price } = event

  return (
    <div className={styles.eventCard}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.title}> {ticket_price && ticket_price} </p>
      </div>
      <div className={styles.mainInfo}>
        <a href={url}>
          <EventDate start={date_start} end={date_end} horizontally={true} />
        </a>
        <div className={styles.locationContainer}>
          <a href={url}>
            <img className={styles.imgGeo} src='images/geoLocation.png' alt='геолокация' />
            <span className={styles.location}>{location}</span>
          </a>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <a href={url} className={styles.linkToEvent}>
        {' '}
        перейти на сайт {title}
      </a>
    </div>
  )
}

export default EventCard
