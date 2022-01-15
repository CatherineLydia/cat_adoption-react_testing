import logo from './logo.svg';
import './App.css';
import Card from "./components/Card/card"
import cuteCat from "../src/svgs/cute_cat.jpg"
function App() {
  return (
    <div>
      <Card name="Sydney"
        phone="111-111-1111"
        email="laith@gmail.com"
        image={{ url: cuteCat, alt: "cute cat image" }}
        favorite={false} />
    </div>
  );
}

export default App;
