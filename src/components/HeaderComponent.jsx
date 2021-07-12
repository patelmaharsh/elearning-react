import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../api/AuthenticationService";
class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    AuthenticationService.logout();
  }
  render() {
    return (
      <div className="header no-gutters">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link className="navbar-brand" to="/">
              E-Learning
            </Link>
          </div>
          <ul className="navbar-nav"></ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/registeruser">
                Register
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-dark nav-link"
                data-toggle="modal"
                data-target="#contactModel"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-dark nav-link"
                data-toggle="modal"
                data-target="#feedbackModel"
              >
                Feedback
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-dark nav-link"
                data-toggle="modal"
                data-target="#courseModel"
              >
                Add Course
              </button>
            </li>
            <li>
              <Link className="nav-link" to="/userlogin">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/adminlogin">
                Admin
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-dark nav-link"
                onClick={this.handleLogout}
                to={{ pathname: "/", state: { message: "logout success" } }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;
