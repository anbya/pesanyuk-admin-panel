import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/font-awesome/css/font-awesome.min.css";
import Mainpage from "./pages/main";
import Loginpage from "./pages/loginPage";
import Orderpage from "./pages/order";
import Orderdetailpage from "./pages/orderDetail";
import Listorder from "./pages/listOrder";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Loginpage />
          </Route>
          <Route path="/home">
            <Mainpage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
