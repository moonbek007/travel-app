import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CountryPage from "./components/Pages/CountryPage";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className='app'>
        <Route path='/test' component={CountryPage} />
        <Route path='/main' component={Main} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
