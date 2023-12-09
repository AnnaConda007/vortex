import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedEvents } from '../../../redux/eventsSlice';
import { filterEvents } from '../../../utils/sortEvents';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const events = useSelector(state => state.events.allEvents);
  const dispatch = useDispatch();

  useEffect(() => { 
    const timer = setTimeout(() => {
      const filteredEvents = filterEvents({ value: searchValue, events });
      dispatch(setSelectedEvents(filteredEvents));
    }, 500); 
    return () => clearTimeout(timer);
  }, [searchValue, events, dispatch]);  

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value.trim());
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
