import moment from 'moment/moment'

export const dateComparison = (dateEvent) => {
  const date = moment(dateEvent, ' MM/DD/YYYY')
  return date.isBefore(moment().startOf('day'))
}

export const formatDate = (dateEvent) => {
  const date = moment(dateEvent, 'MM/DD/YYYY')
  const day = date.format('D')
  const month = date.format('MMMM')
  const year = date.format('YYYY')
  const dayOfWeek = date.format('dddd')
  const mmddyyDate = dateEvent
  return { mmddyyDate, day, month, year, dayOfWeek }
}

export const reRecordEventDate = (events) =>
  events.map((event) => {
    const formattedStartDate = formatDate(event.date_start)
    const formattedEndDate = formatDate(event.date_end)
    return {
      ...event,
      date_start: formattedStartDate,
      date_end: formattedEndDate,
    }
  })
