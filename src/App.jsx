import "./App.css";
import { DataProvider } from "./context/DataContext";
import Home from "./Home";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
