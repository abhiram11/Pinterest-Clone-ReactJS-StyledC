import "./App.css";
import Card from "./components/Card";
import { CardOne, CardThree, CardTwo } from "./components/Data";
import Header from "./components/Header";

//make card buttons using same styled components, overwrite the required/write new ones on them

function App() {
  return (
    <div className="app">
      {/* <h1>Pinterest CLone</h1> */}
      <Header />
      <div className="cards">
        <Card {...CardOne} />
        <Card {...CardTwo} />
        <Card {...CardThree} />
      </div>
    </div>
  );
}

export default App;
