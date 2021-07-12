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
    window.location.reload();
  }
  render() {
    return (
      <div className="header no-gutters">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              <Link className="navbar-brand" to="/">
                E-Learning
              </Link>
            </div>

            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!AuthenticationService.isUserLoggedIn() && (
                <li>
                  <Link className="nav-link" to="/registeruser">
                    Register
                  </Link>
                </li>
              )}

              {AuthenticationService.isUserUser() && (
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
              )}
              {AuthenticationService.isUserUser() && (
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
              )}
              {AuthenticationService.isUserAdmin() && (
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
              )}
              {!AuthenticationService.isUserLoggedIn() && (
                <li>
                  <Link className="nav-link" to="/userlogin">
                    Login
                  </Link>
                </li>
              )}

              {!AuthenticationService.isUserLoggedIn() && (
                <li>
                  <Link className="nav-link" to="/adminlogin">
                    Admin
                  </Link>
                </li>
              )}

              {AuthenticationService.isUserLoggedIn() && (
                <li>
                  <Link
                    className="btn btn-dark nav-link"
                    onClick={this.handleLogout}
                    to={{ pathname: "/", state: { message: "logout success" } }}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;
