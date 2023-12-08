 
 
import EventSelection from './components/event-selection/EventSelection'
import EventsList from './components/events/events-list/EventsList'
import { Provider } from "react-redux";
import store from './redux/store';
function App() { 

  return (
    <Provider store={store}>
    <> 
    <EventSelection/>  
<EventsList/>
    </>
    </Provider>
  )
}

export default App
