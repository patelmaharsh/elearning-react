import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import UserDataService from "../../api/UserDataService";
function validateValue(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
class RegisterUserComponent extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      name: "",
      password: "",
      phoneNo: "",
      address: "",
      regDate: "",
      uploadPhoto: "",
      email: "",
    };
    this.handleSubmitUserForm = this.handleSubmitUserForm.bind(this);
  }
  handleSubmitUserForm(values) {
    let user = {};
    user.userId = values.userId;
    user.name = values.name;
    user.password = values.password;
    user.phoneNo = values.phoneNo;
    user.address = values.address;
    user.uploadPhoto = values.uploadPhoto;
    user.email = values.email;
    user.regDate = moment().format();
    UserDataService.postUser(user).then((response) => {
      this.props.history.push({
        pathname: "/",
        state: { message: "Registered!" },
      });
    });
  }
  render() {
    let userId = this.state.userId;
    let name = this.state.name;
    let password = this.state.password;
    let phoneNo = this.state.phoneNo;
    let address = this.state.address;
    let uploadPhoto = this.state.uploadPhoto;
    let email = this.state.email;
    return (
      <div>
        <h4>Register as User</h4>
        <div className="container">
          <div className="container text-left">
            <Formik
              initialValues={{
                userId,
                name,
                email,
                password,
                address,
                phoneNo,
                uploadPhoto,
              }}
              onSubmit={this.handleSubmitUserForm}
              validateOnBlur={false}
              validateOnChange={false}
              enableReinitialize={true}
            >
              {({ errors, touched, validateField, validateForm }) => (
                <Form>
                  <div className="form-row mt-5">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputUserId">UserId*</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="inputUserId"
                        placeholder="User Id"
                        name="userId"
                        validate={validateValue}
                      />
                      {errors.userId && (
                        <div className="text-danger">{errors.userId}</div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputUserName">User Name*</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="inputUserName"
                        placeholder="User Name"
                        name="name"
                        validate={validateValue}
                      />
                      {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail">Email*</label>
                      <Field
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        name="email"
                      />
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPassword">Password*</label>
                      <Field
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        placeholder="password"
                        name="password"
                      />
                      {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPhone">Phone No</label>
                      <Field
                        type="number"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Phone No"
                        name="phoneNo"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPhoto">Upload Photo</label>
                      <Field
                        type="file"
                        className="form-control"
                        id="inputPhoto"
                        placeholder="Photo"
                        name="uploadPhoto"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputAddress">Address</label>
                      <Field
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Address"
                        name="address"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register
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
export default RegisterUserComponent;
