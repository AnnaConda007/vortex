export const filterEvents = ({ value, events }) => {
  if (!events || !Array.isArray(events)) return [];
  return events.filter((event) => 
    event.title ? event.title.toLowerCase().includes(value.toLowerCase()) : false
  );
}



 