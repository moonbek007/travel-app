import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import CountryPage from "./components/Pages/CountryPage";

function App() {
  return (
    <Router>
      <header>
        this is not a real heder, just a demonstration
      </header>
      <div className='app'>
        <Route path='/test' component={CountryPage} />
        <Route path='/main' component={Main} />
      </div>
    </Router>
  );
}

export default App;