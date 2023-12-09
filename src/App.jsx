 import { Provider } from "react-redux";
import store from './redux/store';
import { BrowserRouter} from 'react-router-dom' 
import AppRoutes from './routes/Routes';
function App() { 

  return (
    <Provider store={store}>
    <BrowserRouter> 
<AppRoutes/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
