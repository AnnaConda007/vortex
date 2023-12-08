import { useState } from 'react'

const SearchInput = ()=>{
  const [searchValue, setSearchValue] = useState("")

const handleSearchInputChange = (value)=>{
  setSearchValue(value)
}

return(
  <>
  <input type="text" placeholder='искать мероприятие' onChange={(e)=>handleSearchInputChange(e.target.value)} value={searchValue}/>



  </>
)
}

export default SearchInput