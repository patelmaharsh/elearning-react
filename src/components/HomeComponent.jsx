import React, { Component } from "react";
import AuthenticationService from "../api/AuthenticationService";
import { userId } from "../api/staticConfig";
import HomeImg from "../Static/image/home.svg";
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
      <div className="container">
        <div id="div-message">{this.props.location.state && (<div className="alert alert-warning">{this.props.location.state.message}</div>)}</div>
        <div className="row">
          <div className="col-md-6 text-left">
            <h1 className="display-4 mt-5">Learn Without Limits</h1>
            <div className="">
              <h3 className="mt-5">Register with E-learning to lend your first dream job</h3>
              <div className="mt-5 focus">
                <p>Follow</p>
                <p>One</p>
                <p>Course</p>
                <p>Until</p>
                <p>Successful</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="home-img" style={{backgroundImage: `url(${HomeImg})`, height:"80vh", backgroundSize: "cover"}}></div>
            </div>
          </div>
        </div>
        <div style={{height: "80vh"}}></div>
      </div>
    );
  }
}
export default HomeComponent;
