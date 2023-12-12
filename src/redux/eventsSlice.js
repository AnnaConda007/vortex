import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allEvents: [],
  selectedEvents: [],
}
const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.allEvents = action.payload
    },
    setSelectedEvents: (state, action) => {
      state.selectedEvents = action.payload
    },
  },
})
export const { setEvents, setSelectedEvents } = eventsSlice.actions
export default eventsSlice.reducer
