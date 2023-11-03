import { Provider } from "react-redux";
import { store } from "../state";
import CryptoAtmList from "./CryptoAtmList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Search For a Crypto ATM</h1>
        <CryptoAtmList />
      </Provider>
    </div>
  );
}

export default App;
