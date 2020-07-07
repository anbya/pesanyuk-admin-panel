import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/font-awesome/css/font-awesome.min.css";
import Mainpage from "./pages/main";
import Orderpage from "./pages/order";
import Orderdetailpage from "./pages/orderDetail";
import Listorder from "./pages/listOrder";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/order_page">
            <Orderpage />
          </Route>
          <Route exact path="/order_detail_page">
            <Orderdetailpage />
          </Route>
          <Route exact path="/list_order">
            <Listorder />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
