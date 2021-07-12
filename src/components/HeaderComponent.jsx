import React, { Component } from "react";
import { Link } from "react-router-dom";
class HeaderComponent extends Component {
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
                class="btn btn-dark nav-link"
                data-toggle="modal"
                data-target="#contactModel"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                type="button"
                class="btn btn-dark nav-link"
                data-toggle="modal"
                data-target="#FeedbackModel"
              >
                Feedback
              </button>
            </li>
            <li>
              <button
                type="button"
                class="btn btn-dark nav-link"
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
          </ul>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;
