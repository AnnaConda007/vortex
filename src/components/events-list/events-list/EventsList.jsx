import axios from "axios"
import EventCard from '../event-card/EventCard'
import { useEffect } from 'react'
import { setEvents , setSelectedEvents} from '../../../redux/eventsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { filterEventsToDate } from '../../../utils/sortEvents'
import { optionsToChooseSelect } from '../../../constants'
import styles from "../eventsList.module.css"

const EventsList = ()=>{
  const dispatch = useDispatch()
  const events = useSelector(state=>state.events.selectedEvents)
   
useEffect(()=>{
  const getEvents = async()=>{
    try {
      const events =  await axios.get("http://localhost:3000/get-events")
      const filtered=  filterEventsToDate(events.data.data,optionsToChooseSelect.future)
       dispatch(setEvents(events.data.data) )
       dispatch(setSelectedEvents(filtered) )
    } catch (error) {
      console.error(error)
    }
  }
  getEvents()
},[])
 
return(
  <>
  <section className= {styles.eventsContainer}>
<div className={`${styles.eventsRow } ${ styles.eventsRow_head}`}>
  <div className={ `${styles.eventsItem} ${styles.eventsItemHeader}`} > <h2 className='headerTitle'>Дата</h2></div>
  <div className={ `${styles.eventsItem} ${styles.eventsItemHeader}`} > <h2 className='headerTitle'>Название события</h2> </div>
  <div className={ `${styles.eventsItem} ${styles.eventsItemHeader}`} > <h2 className='headerTitle'>Расположение</h2></div>
</div>
{  events.map((event)=>(
    <EventCard key={event.url} event={event}/>
  ))}
  </section>
 
  </>

)

}

export default EventsList