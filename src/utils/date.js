import moment from 'moment/moment';

export const dateComparison = (dateString)=>{
  const date = moment(dateString, ' MM/DD/YYYY'); 
  return date.isBefore(moment().startOf('day'));
}
 

export const formatDate = (dateString) => { 
  const date = moment(dateString, 'MM/DD/YYYY'); 
  const day = date.format('D');  
  const month = date.format('MMMM');  
  const year = date.format('YYYY');  
  const dayOfWeek = date.format('dddd');  
  return { day, month, year, dayOfWeek };
};
