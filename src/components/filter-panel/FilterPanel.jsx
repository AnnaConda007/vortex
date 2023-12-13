import React from 'react'
import SearchInput from './search-input/SearchInput'
import SelectInput from './select-input/SelectInput'
import styles from './filterPanel.module.css'

const FilterPanel = () => {
  return (
    <div className={styles.selectEventsContainer}>
      <SearchInput />
      <SelectInput />
    </div>
  )
}

export default FilterPanel
