import SearchInput from './search-input/SearchInput'
import SelectInput from './select-input/SelectInput'
import styles from "./eventSelection.module.css"
const EventSelection = ()=>{
  return(
  <div className={styles.selectEventsContainer}>
  <SearchInput/> 
    <SelectInput/>
  </div>
  )
}

export default EventSelection