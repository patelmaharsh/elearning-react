import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationService from "../api/AuthenticationService";

class AuthenticatedAdminRoutes extends Component {
  render() {
    if (AuthenticationService.isUserAdmin()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/adminlogin" />;
    }
  }
}
export default AuthenticatedAdminRoutes;
