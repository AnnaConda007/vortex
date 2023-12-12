import EventListItem from './event-item-list/EventListItem'
import {  useSelector } from 'react-redux' 
import styles from "./eventsList.module.css" 
import {useFetchEvents} from '../../hooks/useFetchEvents'
import { useDateFilter } from '../../hooks/useEventFilter'
import { useEffect } from 'react'

const EventsList = ()=>{
  useFetchEvents()
  const dateFilter= useDateFilter()
  const selectedEvents = useSelector(state=>state.events.selectedEvents)
  const allEvents = useSelector((state)=>state.events.allEvents)
  const selectInputValue = useSelector((state)=>state.eventFilter.curentSelectKey)
 
  useEffect(() => { 
    dateFilter();
  }, [selectInputValue,allEvents]);  
  
return(
  <>
  <section className= {styles.eventsContainer}>
<div className={`${styles.eventsRow } ${ styles.eventsRow_head}`}>
  <div className={ `${styles.eventsItem} ${styles.eventsItemHeader}`} > <h2 className='headerTitle'>Дата</h2></div>
  <div className={ `${styles.eventsItem} ${styles.eventsItemHeader}`} > <h2 className='headerTitle'>Название события</h2> </div>
  <div className={ `${styles.eventsItem} ${styles.eventsItemHeader}`} > <h2 className='headerTitle'>Расположение</h2></div>
</div>
{  selectedEvents.map((event)=>(
    <EventListItem key={event.url} event={event}/>
  ))}
  </section>
  </>

)
}

export default EventsList