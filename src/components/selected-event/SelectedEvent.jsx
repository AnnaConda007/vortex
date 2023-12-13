import React from 'react'
import EventCard from './event-card/EventCard'
import styles from './selectedEvent.module.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SelectedEvent = () => {
  const navigate = useNavigate()
  const { etag } = useParams()
  const eventName = (etag || '').replace(/-/g, ' ')
  const event = useSelector((state) => state.events.allEvents.find((e) => e.title === eventName))
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      navigate(`/`)
    }
  }

  if (!etag || !event) {
    return null
  }

  return (
    <section className={styles.modalBacking} onClick={handleClose}>
      <section className={styles.selectedEventModal}>
        <img className={styles.close} src='/images/close.png' alt='закрыть' onClick={handleClose} />
        <EventCard event={event} />
      </section>
    </section>
  )
}
export default SelectedEvent
