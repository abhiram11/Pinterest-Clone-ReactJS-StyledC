import "./App.css";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodayPage from "./pages/today";
import Home from "./pages";

//make card buttons using same styled components, overwrite the required/write new ones on them

function App() {
  return (
    <Router>
      <div className="app">
        {/* <h1>Pinterest CLone</h1> */}
        <Header />
        <Switch>
          {/* This will later be set as a Home component */}
          <Route path="/" component={Home} exact />
          <Route path="/today" component={TodayPage} exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
