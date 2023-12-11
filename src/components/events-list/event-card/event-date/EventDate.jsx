const EventDate = ({start, end})=>{
const startDay = start.date
const endDay = end.date
const oneDayEvent = startDay===endDay

  return(
    <div>
      <p>{start.day}</p>
      <div>
      <p>{start.month}</p>
      <div>
      <p>{start.year}</p>
      <p>{start.dayOfWeek} {!oneDayEvent && `-${end.dayOfWeek}`}</p>
      </div>
      </div>
    </div>
  )
}

export default EventDate