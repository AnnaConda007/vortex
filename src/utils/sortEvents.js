
import { optionsToChooseSelect } from '../constants';
import { dateComparison } from './date';
export const filterEventsToTitle = ( value, events ) => {
  if (!events || !Array.isArray(events)) return [];
  return events.filter((event) => 
    event.title ? event.title.toLowerCase().includes(value.toLowerCase()) : false
  );
}

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


