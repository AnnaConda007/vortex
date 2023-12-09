import moment from 'moment/moment';

export const filterEvents = ({ value, events }) => {
  if (!events || !Array.isArray(events)) return [];
  return events.filter((event) => 
    event.title ? event.title.toLowerCase().includes(value.toLowerCase()) : false
  );
}

export const filterEventsToDate = (  events , dateType) => {
  if (!events || !Array.isArray(events)) return [];
  if(dateType==="ближайшие"){
    return events.filter((event) => 
    !dateComparison(event.date_end)
    );
  }
  return events.filter((event) => 
  dateComparison(event.date_start)
  );

}


export const dateComparison = (dateString)=>{
  const date = moment(dateString, ' MM/DD/YYYY'); 
  return date.isBefore(moment().startOf('day'));
}
 