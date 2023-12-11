import styles from "./eventDate.module.css"
const EventDate = ({start, end})=>{
const startDay = start.date
const endDay = end.date
const oneDayEvent = startDay===endDay

  return(
    <div className={styles.dateInfo}>
      <p className={styles.day}>{start.day}</p>
      <div className={styles.date}>
      <p className={styles.mounth}>{start.month}</p>
      <p className={styles.additionDateInfo}>{start.year}, {start.dayOfWeek} {!oneDayEvent && `-${end.dayOfWeek}`}</p>
      </div>
    </div>
  )
}

export default EventDate