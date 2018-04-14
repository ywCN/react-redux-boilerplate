import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import SideBar from './SideBar';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import Orders from './Orders';
import Customers from './Customers';
import MyShop from './MyShop';
import Help from './Help';
import Settings from './Settings';

class App extends Component {
  render() {
    // TODO: check cookie here and return only <Landing /> ?
    return (
      <BrowserRouter>
        <div>
          <Header />
          <SideBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers" component={Customers} />
            <Route path="/myshop" component={MyShop} />
            <Route path="/help" component={Help} />
            <Route path="/settings" component={Settings} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
