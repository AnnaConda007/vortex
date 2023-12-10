
import { optionsToChooseSelect } from '../constants';
import { dateComparison } from './date';
 

export const searchEvent = (value, events) => {
  if (!events || !Array.isArray(events)) return [];
  const lowercasedValue = value.toLowerCase();
  return events.filter((event) => {
    return (
      (event.title && event.title.toLowerCase().includes(lowercasedValue)) ||
      (event.location && event.location.toLowerCase().includes(lowercasedValue)) ||
      (event.description && event.description.toLowerCase().includes(lowercasedValue))  
    );
  });
};

export const filterEventsToDate = (  events , dateType) => {
   if (!events || !Array.isArray(events)) return [];
  if(dateType===optionsToChooseSelect.future){
    return events.filter((event) => 
    !dateComparison(event.date_end)
    );
  }else if(dateType===optionsToChooseSelect.past){
    return events.filter((event) => 
    dateComparison(event.date_start)
    );
  } else return events
}


