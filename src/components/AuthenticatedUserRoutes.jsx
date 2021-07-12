import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationService from "../api/AuthenticationService";

class AuthenticatedUserRoutes extends Component {
  render() {
    if (AuthenticationService.isUserUser()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/userlogin" />;
    }
  }
}
export default AuthenticatedUserRoutes;
