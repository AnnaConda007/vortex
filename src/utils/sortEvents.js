
import { optionsToChooseSelect } from '../constants';
import { dateComparison } from './date';
 import { formatDate } from './date';
 const reRecordEventDate = (filterdEvents)=>(
  filterdEvents.map((event) => {
    const formattedStartDate = formatDate(event.date_start);
    return {
      ...event, 
      date_start: formattedStartDate,  
      date_end: formattedStartDate,  
    };
  })
)

export const searchEvent = (value, events) => {
  if (!events || !Array.isArray(events)) return [];
  const lowercasedValue = value.toLowerCase();
  const filtered = events.filter((event) => {
    return (
      (event.title && event.title.toLowerCase().includes(lowercasedValue)) ||
      (event.location && event.location.toLowerCase().includes(lowercasedValue)) ||
      (event.description && event.description.toLowerCase().includes(lowercasedValue))  
    );
  });
  return reRecordEventDate(filtered )
};



export const filterEventsToDate = (  events , dateType) => {
   if (!events || !Array.isArray(events)) return [];
  if(dateType===optionsToChooseSelect.future){
    const filtered = events.filter((event) => 
    !dateComparison(event.date_end)
    );
    return reRecordEventDate(filtered)
  }else if(dateType===optionsToChooseSelect.past){
    const filtered=  events.filter((event) => 
    dateComparison(event.date_start)
    );
    return reRecordEventDate(filtered)
  } else return reRecordEventDate(events) 
}


