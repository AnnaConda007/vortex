
import { optionsToChooseSelect } from '../constants';
import { dateComparison } from './date';



export const searchEvent = (value, events) => {
  if (!events || !Array.isArray(events)) return [];
  const lowercasedValue = value.toLowerCase();
  const filtered = events.filter((event) => {
    return (
      (event.title && event.title.toLowerCase().includes(lowercasedValue)) ||
      (event.location && event.location.toLowerCase().includes(lowercasedValue)) ||
      (event.description && event.description.toLowerCase().includes(lowercasedValue)) || (
        (event.date_start && event.date_start.month.toLowerCase().includes(lowercasedValue))
      )
    );
  });
  return filtered
};



export const filterEventsToDate = (  events , dateType) => {
   if (!events || !Array.isArray(events)) return [];
  if(dateType===optionsToChooseSelect.future){
    const filtered = events.filter((event) => 
    !dateComparison(event.date_end.mmddyyDate
      )
    );
    return filtered 
  }else if(dateType===optionsToChooseSelect.past){
    const filtered=  events.filter((event) => 
    dateComparison(event.date_start.mmddyyDate)
    );
    return filtered 
  } else return events
}


