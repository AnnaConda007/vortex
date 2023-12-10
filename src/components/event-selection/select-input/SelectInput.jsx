import { useState } from 'react' 
import { filterEventsToDate } from '../../../utils/sortEvents'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedEvents } from '../../../redux/eventsSlice'
import { optionsToChooseSelect } from '../../../constants'
import styles from "./selectInput.module.css"
 const SelectInput = ()=>{
 
const [selected, setSelected] = useState("")
const allEvents = useSelector(state=>state.events.allEvents)
const dispatch = useDispatch()

const handleSelect = (key) => {
  if (!key) return;
  setSelected(key); 
  const selectedOption = optionsToChooseSelect[key];   
  const filtered = filterEventsToDate(allEvents, selectedOption);
  dispatch(setSelectedEvents(filtered));
}

return (
  <select className={styles.select} value={selected} onChange={(e) => handleSelect(e.target.value)}>
    {Object.keys(optionsToChooseSelect).map((key, i) => (
      <option className={styles.option} key={i} value={key}>
        {optionsToChooseSelect[key]}
      </option>
    ))}
  </select>
)


}

export default SelectInput