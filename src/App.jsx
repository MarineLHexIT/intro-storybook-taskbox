import './App.css'
import store from "./lib/store";
import {Provider} from "react-redux";
import InboxScreen from "./InboxScreen";

function App() {

  return (
      <Provider store={store}>
          <InboxScreen/>
      </Provider>
  )
}

export default App
