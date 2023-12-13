import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { optionsToChooseSelect } from '../../../constants'
import styles from './selectInput.module.css'
import { setKeySelectInput } from '../../../redux/filterSlice'
import { updateSearchValue } from '../../../redux/filterSlice'
const SelectInput = () => {
  const dispatch = useDispatch()
  const selectInputValue = useSelector((state) => state.eventFilter.curentSelectKey)

  const handleSelect = (key) => {
    if (!key) return
    dispatch(setKeySelectInput(key))
    dispatch(updateSearchValue(''))
  }

  return (
    <select
      className={styles.select}
      value={selectInputValue}
      onChange={(e) => handleSelect(e.target.value)}
    >
      {Object.keys(optionsToChooseSelect).map((key, i) => (
        <option className={styles.option} key={i} value={optionsToChooseSelect[key]}>
          {optionsToChooseSelect[key]}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
