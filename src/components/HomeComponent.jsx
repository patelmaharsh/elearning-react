import React, { Component } from "react";
import AuthenticationService from "../api/AuthenticationService";
import { userId } from "../api/staticConfig";
import { MessageComponent } from "./ExtraComponents";
class HomeComponent extends Component {
  componentDidMount() {
    if (AuthenticationService.isUserUser()) {
      this.props.history.push(`/user/${userId}`);
    } else if (AuthenticationService.isUserAdmin()) {
      this.props.history.push("/admin");
    }
  }
  render() {
    return (
      <div>
        <h4>Home</h4>
      </div>
    );
  }
}
export default HomeComponent;
