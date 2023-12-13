import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setEvents } from '../redux/eventsSlice'
import { reRecordEventDate } from '../utils/date'
import axios from 'axios'
import { getEventsEndPoint } from '../constants'

export const useFetchEvents = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getEvents = async () => {
      try {
        const events = await axios.get(getEventsEndPoint)
        const eventsWithExtendedDate = reRecordEventDate(events.data.data)
        dispatch(setEvents(eventsWithExtendedDate))
      } catch (error) {
        console.error(error)
      }
    }
    getEvents()
  }, [])
}
