import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthenticationService from "../api/AuthenticationService";
import AdminComponent from "./admin/AdminComponent";
import AdminLoginComponent from "./admin/AdminLoginComponent";
import AuthenticatedAdminRoutes from "./AuthenticatedAdminRoutes";
import AuthenticatedUserRoutes from "./AuthenticatedUserRoutes";
import ErrorComponent from "./ErrorComponent";
import { ExtraFooterComponent, ExtraHeaderComponent } from "./ExtraComponents";
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
        <ExtraHeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          {!AuthenticationService.isUserLoggedIn() && (
            <Route
              exact
              path="/registeruser"
              component={RegisterUserComponent}
            ></Route>
          )}
          {!AuthenticationService.isUserLoggedIn() && (
            <Route
              exact
              path="/userlogin"
              component={UserLoginComponent}
            ></Route>
          )}
          {!AuthenticationService.isUserLoggedIn() && (
            <Route
              exact
              path="/adminlogin"
              component={AdminLoginComponent}
            ></Route>
          )}

          <AuthenticatedAdminRoutes
            exact
            path="/admin"
            component={AdminComponent}
          ></AuthenticatedAdminRoutes>
          <AuthenticatedUserRoutes
            exact
            path="/user/:id"
            component={UserComponent}
          ></AuthenticatedUserRoutes>
          <Route component={ErrorComponent}></Route>
        </Switch>
        <ExtraFooterComponent />
        <FooterComponent />
      </Router>
    );
  }
}
export default ElearningComponent;
