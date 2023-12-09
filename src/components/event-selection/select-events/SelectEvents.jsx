import { useState } from 'react' 
import { filterEventsToDate } from '../../../utils/sortEvents'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedEvents } from '../../../redux/eventsSlice'
 const SelectEvents = ()=>{
const [selected, setSelected] = useState("")
const optionsToChoose  = ["все","ближайшие","прошедшие"]
const allEvents = useSelector(state=>state.events.allEvents)
const dispatch = useDispatch()

const handleSelect = (value)=>{
  setSelected(value)  
  const filtered =filterEventsToDate(allEvents,value ) 
  dispatch(setSelectedEvents(filtered))
}

return(
  <select value={selected} onChange={(e)=>handleSelect(e.target.value)}>
    {optionsToChoose.map((option,i)=>(<option key={i}>{option}</option>))}
</select>
)

}

export default SelectEvents