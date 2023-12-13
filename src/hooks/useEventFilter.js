import { useDispatch, useSelector } from 'react-redux'
import { optionsToChooseSelect } from '../constants'
import { setSelectedEvents } from '../redux/eventsSlice'
import { dateComparison } from '../utils/date'

export const useDateFilter = () => {
  const dispatch = useDispatch()
  const currentSelectInputKey = useSelector((state) => state.eventFilter.curentSelectKey)
  const allEvents = useSelector((state) => state.events.allEvents)
  return () => {
    let filtered
    if (currentSelectInputKey === optionsToChooseSelect.future) {
      filtered = allEvents.filter((event) => !dateComparison(event.date_end.mmddyyDate))
    } else if (currentSelectInputKey === optionsToChooseSelect.past) {
      filtered = allEvents.filter((event) => dateComparison(event.date_start.mmddyyDate))
    } else {
      filtered = allEvents
    }
    dispatch(setSelectedEvents(filtered))
  }
}

export const useSearch = () => {
  const dispatch = useDispatch()
  const allEvents = useSelector((state) => state.events.allEvents)
  return (searchValue) => {
    const lowercasedValue = searchValue.toLowerCase()
    const filtered = allEvents.filter((event) => {
      return (
        (event.title && event.title.toLowerCase().includes(lowercasedValue)) ||
        (event.location && event.location.toLowerCase().includes(lowercasedValue)) ||
        (event.date_start && event.date_start.month.toLowerCase().includes(lowercasedValue))
      )
    })
    dispatch(setSelectedEvents(filtered))
  }
}
