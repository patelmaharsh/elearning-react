import React from "react";
import { Link, useHistory } from "react-router-dom";
import AuthenticationService from "../api/AuthenticationService";
function HeaderComponent() {
  const history = useHistory();
  const handleLogout = () => {
    AuthenticationService.logout();
    history.push({
      pathname: "/",
      state: {message: "Logout Successful!"}
    });
    window.location.reload();
  }
  
    return (
      <div className=" no-gutters active" id="header">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
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
              <Link className="navbar-brand " id="text-brand" to="/">
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
                    className="btn btn-light nav-link"
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
                    className="btn btn-light nav-link"
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
                    className="btn btn-light nav-link"
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
              {!AuthenticationService.isUserLoggedIn() && (
                <li>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              )}

              {AuthenticationService.isUserLoggedIn() && (
                <li>
                  <button
                    className="btn btn-light nav-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );

}
export default HeaderComponent;
