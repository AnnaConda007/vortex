import axios from "axios"
import EventCard from '../event-card/EventCard'
import { useEffect, useState } from 'react'
import { setEvents } from '../../../redux/eventsSlice'
import { useDispatch, useSelector } from 'react-redux'
const EventsList = ()=>{
  const dispatch = useDispatch()
  const events = useSelector(state=>state.events.selectedEvents)
   
useEffect(()=>{
  const getEvents = async()=>{
    const events =  await axios.get("http://localhost:3000/get-events")
    dispatch(setEvents(events.data.data) )
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