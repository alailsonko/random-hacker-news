import RoutesApp from "./routes";
import { Provider } from 'react-redux'
import './App.css'
import configureStore from "./store/store";

const { store } = configureStore()

function App() {
  return (
    <Provider store={store}>
      <RoutesApp />
    </Provider>
  );
}

export default App;
