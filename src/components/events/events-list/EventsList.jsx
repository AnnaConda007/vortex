import axios from "axios"
import EventCard from '../event-card/EventCard'
import { useEffect, useState } from 'react'
import { setEvents , setSelectedEvents} from '../../../redux/eventsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { filterEventsToDate } from '../../../utils/sortEvents'
import { optionsToChooseSelect } from '../../../constants'

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
  events.map((event,i)=>(
    <EventCard key={i} title={event.title} date = {event.date_start}/>
  ))
)

}

export default EventsList