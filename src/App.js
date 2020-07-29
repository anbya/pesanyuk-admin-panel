import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/font-awesome/css/font-awesome.min.css";
import Mainpage from "./pages/main";
import Loginpage from "./pages/loginPage";
import Navbarpage from "./pages/navbar";
import Outletpage from "./pages/outlet";
import Categorypage from "./pages/categoryitem";
import Itempage from "./pages/itempage";
import Staffpage from "./pages/staff";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Loginpage />
          </Route>
          <Route path="/home">
            <Navbarpage />
            <Mainpage />
          </Route>
          <Route path="/outlet">
            <Outletpage />
          </Route>
          <Route path="/categoryItem">
            <Navbarpage />
            <Categorypage />
          </Route>
          <Route path="/item">
            <Navbarpage />
            <Itempage />
          </Route>
          <Route path="/staff">
            <Navbarpage />
            <Staffpage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
