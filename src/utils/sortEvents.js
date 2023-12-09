import moment from 'moment/moment';
import { optionsToChooseSelect } from '../constants';

export const filterEvents = ({ value, events }) => {
  
  if (!events || !Array.isArray(events)) return [];
  return events.filter((event) => 
    event.title ? event.title.toLowerCase().includes(value.toLowerCase()) : false
  );
}

export const filterEventsToDate = (  events , dateType) => {
  console.log(dateType)
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


export const dateComparison = (dateString)=>{
  const date = moment(dateString, ' MM/DD/YYYY'); 
  return date.isBefore(moment().startOf('day'));
}
 