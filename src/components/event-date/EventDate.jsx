import React from 'react';
import styles from './eventDate.module.css';
const EventDate = ({start, end, horizontally = false}) => {
  const startDay = start.date;
  const endDay = end.date;
  const oneDayEvent = startDay === endDay;

  return (
    <div className={styles.dateInfo}>
      <p className={`${styles.day} ${horizontally && styles.dayHorizont}`}>{start.day}</p>
      <div className={`${styles.date} ${horizontally && styles.dateHorizont}`}>
        <p className={styles.mounth}>{start.month}</p>
        <p className={styles.additionDateInfo}>
          {start.year}, {start.dayOfWeek} {!oneDayEvent && `-${end.dayOfWeek}`}
        </p>
      </div>
    </div>
  );
};

export default EventDate;
