import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedEvents } from '../../../redux/eventsSlice';
import { filterEventsToTitle } from '../../../utils/sortEvents';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const events = useSelector(state => state.events.allEvents);
  const dispatch = useDispatch();

  let debounceTimer;
  const handleSearchInputChange = (event) => {
    const newValue = event.target.value.trim();
    setSearchValue(newValue);
    clearTimeout(debounceTimer); 
    debounceTimer = setTimeout(() => {
      const filteredEvents = filterEventsToTitle(  newValue, events  );
      dispatch(setSelectedEvents(filteredEvents));
    }, 500);  
  };

  return (
    <>
      <input
        type="text"
        placeholder='искать мероприятие'
        onChange={handleSearchInputChange}
        value={searchValue}
      />
    </>
  );
};

export default SearchInput;
