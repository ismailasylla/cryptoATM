import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </Provider>
    </div>
  );
}

export default App;
