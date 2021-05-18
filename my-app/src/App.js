import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Routing from "./Components/Routing";
import { PrivateRoute,PublicRoute } from './Components/PrivateRoute';
import Signin from "./Components/Signin";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import LifeCycle from "./Components/LifeCycle";
import Page from './Components/Page';
import Page2 from './Components/Page2';
import BookService from './service/BookService';
import './App.css';




function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Routing} />
            <Route path = "/Welcome" component = {Welcome} />
            <PublicRoute  path = "/Signin" component = {Signin}  exact/>
            <PrivateRoute  restricted = {true} path = "/home" component = {Home} />
            <PublicRoute path = "/Page" component = {() => <Page autherized={false} />} />
            <Route path = "/Page2" component = {() => <Page2 autherized={false} />} />
            <Route path = "/LifeCycle" component = {LifeCycle} />
            <Route path = "/BookService" component = {BookService} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
