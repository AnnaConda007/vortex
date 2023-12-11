import moment from 'moment/moment';

export const dateComparison = (dateEvent)=>{
  const dateString = dateEvent.dateNoFormatted ? dateEvent.dateNoFormatted : dateEvent
  const date = moment(dateString, ' MM/DD/YYYY'); 
  return date.isBefore(moment().startOf('day'));
}
 

export const formatDate = (dateEvent) => {  
  const dateString = dateEvent.dateNoFormatted ? dateEvent.dateNoFormatted : dateEvent
  const date = moment(dateString, 'MM/DD/YYYY'); 
  const day = date.format('D');  
  const month = date.format('MMMM');  
  const year = date.format('YYYY');  
  const dayOfWeek = date.format('dddd');  
const dateNoFormatted =dateString
  return { dateNoFormatted ,day, month, year, dayOfWeek };
};
