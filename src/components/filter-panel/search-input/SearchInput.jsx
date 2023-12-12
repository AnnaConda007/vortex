 import styles from "./searchInput.module.css"
import { useSearch } from '../../../hooks/useEventFilter';
import { useDispatch, useSelector } from 'react-redux';
 import { updateSearchValue } from '../../../redux/filterSlice';
import { optionsToChooseSelect } from '../../../constants';
 import { setKeySelectInput } from '../../../redux/filterSlice';

const SearchInput = () => {
  const dispatch = useDispatch()
  const searchEvent = useSearch() 
const searchValue= useSelector(state=>state.eventFilter.searchValue)
const selectInputValue = useSelector((state)=>state.eventFilter.curentSelectKey)

const handleInputFocus = ()=>{
  if(selectInputValue!=optionsToChooseSelect.all){
    dispatch(setKeySelectInput(optionsToChooseSelect.all))}
}



   let debounceTimer;
  const handleSearchInputChange = (event) => { 
    const value = event.target.value.trim();
   dispatch(updateSearchValue(value))
    clearTimeout(debounceTimer); 
    debounceTimer = setTimeout(() => {
      searchEvent(value)
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
        onFocus={handleInputFocus}

      />
    </div>
 
    
      
    
  );
};

export default SearchInput;

 