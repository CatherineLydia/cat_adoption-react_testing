import './App.css';
import Cards from "./components/Cards/cards"
import cats from "./mocks/cats.json";

function App() {
  return (
    <div>
      <Cards cats={cats}></Cards>
    </div>
  );
}

export default App;
