import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
import UserDataService from "../../api/UserDataService";
import AuthenticationService from "../../api/AuthenticationService";
function validateValue(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
class UserLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }
  handleUserLogin(values) {
    UserDataService.getUserByEmail(values.email).then((response) => {
      if (response.data) {
        // console.log(response.data);
        if (response.data.password === values.password) {
          AuthenticationService.registerUserLogin(
            response.data.userId,
            values.email
          );
          this.props.history.push({
            pathname: `/user/${response.data.userId}`,
            state: { message: "Login SUccess!" },
          });
        } else {
          this.setState({
            message: "Invalid Credentials",
          });
        }
      } else {
        this.setState({
          message: "Invalid Email",
        });
      }
    });
  }
  render() {
    let email = this.state.email;
    let password = this.state.password;
    return (
      <div>
        <h4>User Login</h4>
        <div className="container ">
          <div className="row text-left center ">
            <Formik
              initialValues={{
                email,
                password,
              }}
              onSubmit={this.handleUserLogin}
              validateOnBlur={false}
              validateOnChange={false}
              enableReinitialize={true}
            >
              {({ errors, touched, validateField, validateForm }) => (
                <Form>
                  <div className="row mt-5">
                    <div className="col-md-12">
                      <label htmlFor="inputEmail">Email</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        name="email"
                        validate={validateValue}
                      />
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="inputPassword">Password</label>
                      <Field
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="password"
                        placeholder="Password"
                        validate={validateValue}
                      />
                      {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary mt-3">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
export default UserLoginComponent;
