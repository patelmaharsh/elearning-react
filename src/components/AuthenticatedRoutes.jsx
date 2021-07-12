import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class AuthenticatedRoutes extends Component {
  render() {
    if (AuthenticationService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/hms/login" />;
    }
  }
}
export default AuthenticatedRoutes;
