import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
import AuthenticationService from "../../api/AuthenticationService";
import AdminDataService from "../../api/AdminDataService";
function validateValue(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
class AdminLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
    };
    this.handleAdminLogin = this.handleAdminLogin.bind(this);
  }
  handleAdminLogin(values) {
    AdminDataService.getAdminByEmail(values.email).then((response) => {
      if (response.data) {
        // console.log(response.data);
        if (response.data.password === values.password) {
          AuthenticationService.registerAdminLogin(
            response.data.adminId,
            values.email
          );
          this.props.history.push({
            pathname: `/admin`,
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
        <h4>Admin Login</h4>
        <div className="container ">
          <div className="row text-left center ">
            <Formik
              initialValues={{
                email,
                password,
              }}
              onSubmit={this.handleAdminLogin}
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
export default AdminLoginComponent;
