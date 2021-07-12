import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminComponent from "./admin/AdminComponent";
import AdminLoginComponent from "./admin/AdminLoginComponent";
import ErrorComponent from "./ErrorComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import RegisterUserComponent from "./user/RegisterUserComponent";
import UserComponent from "./user/UserComponent";
import UserLoginComponent from "./user/UserLoginComponent";

class ElearningComponent extends Component {
  render() {
    return (
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route
            exact
            path="/registeruser"
            component={RegisterUserComponent}
          ></Route>
          <Route exact path="/userlogin" component={UserLoginComponent}></Route>
          <Route
            exact
            path="/adminlogin"
            component={AdminLoginComponent}
          ></Route>
          <Route exact path="/admin" component={AdminComponent}></Route>
          <Route exact path="/user/:id" component={UserComponent}></Route>
          <Route component={ErrorComponent}></Route>
        </Switch>
        <FooterComponent />
      </Router>
    );
  }
}
export default ElearningComponent;
