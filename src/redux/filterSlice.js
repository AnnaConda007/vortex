import { createSlice } from '@reduxjs/toolkit'
import { optionsToChooseSelect } from '../constants'

const defaultKey = optionsToChooseSelect[Object.keys(optionsToChooseSelect)[0]]
const initialState = {
  curentSelectKey: defaultKey,
  searchValue: '',
}
const filterSlice = createSlice({
  name: 'filterEvents',
  initialState,
  reducers: {
    setKeySelectInput(state, action) {
      state.curentSelectKey = action.payload
    },
    updateSearchValue(state, action) {
      state.searchValue = action.payload
    },
  },
})
export const { setKeySelectInput, updateSearchValue } = filterSlice.actions
export default filterSlice.reducer
