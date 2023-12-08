import axios from "axios"
import EventCard from '../event-card/EventCard'
import { useEffect, useState } from 'react'

const EventsList = ()=>{
const [events, setEvents] = useState([])
useEffect(()=>{
  const getEvents = async()=>{
    const events =  await axios.get("http://localhost:3000/get-events")
    setEvents(events.data.data)
    console.log(events.data.data)
  }
  getEvents()
},[])
 
return(
  events.map((event,i)=>(
    <EventCard key={i} title={event.title}/>
  ))
)

}

export default EventsList