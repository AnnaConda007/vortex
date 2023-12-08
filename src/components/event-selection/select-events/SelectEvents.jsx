import { useState } from 'react'

const SelectEvents = ()=>{
const [selected, setSelected] = useState("")
const optionsToChoose  = ["все","онлайн","офлайн","ближайшие","прошедшие"]

const handleSelect = (value)=>{
  setSelected(value)
}

return(
  <select value={selected} onChange={(e)=>handleSelect(e.target.value)}>
    {optionsToChoose.map((option,i)=>(<option key={i}>{option}</option>))}
</select>
)

}

export default SelectEvents