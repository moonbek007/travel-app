import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountryPage from "./components/Pages/CountryPage";
import MainPageHeader from "./components/Header/MainPageHeader";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CardHeader from "./components/Header/CardHeader";
import ScrollToTop from "./scroll-to-top";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Switch>
          <Route path="/country">
            <CardHeader />
            <CountryPage />
          </Route>
          <Route path="/">
            <MainPageHeader />
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
