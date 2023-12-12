import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedEvents } from '../../../redux/eventsSlice';
import { searchEvent } from '../../../utils/sortEvents';
import styles from "./searchInput.module.css"

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
      const filteredEvents = searchEvent(  newValue, events  );
      dispatch(setSelectedEvents(filteredEvents));
    }, 500);  
  };

  return (
    
<div className={styles.searchWrap}>
      <img className={styles.searchImg} src="./public\images\search-icon.png" alt="поиск" />
      <input className={styles.searchInput}
        type="text"
        placeholder='Поиск названий событий, мест, дат'
        onChange={handleSearchInputChange}
        value={searchValue}
      />
    </div>
 
    
      
    
  );
};

export default SearchInput;
