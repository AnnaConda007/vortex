import moment from 'moment/moment';

export const dateComparison = (dateString)=>{
  const date = moment(dateString, ' MM/DD/YYYY'); 
  return date.isBefore(moment().startOf('day'));
}
 