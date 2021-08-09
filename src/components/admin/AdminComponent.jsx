import React, { Component } from "react";
import CourseDataService from "../../api/CourseDataService";
import UserDataService from "../../api/UserDataService.js";
import { Field, Form, Formik } from "formik";
import ContactDataService from "../../api/ContactDataService";
import FeedbackDataService from "../../api/FeedbackDataService";
function validateValue(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
class AdminComponent extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      courses: [],
      feedbacks: [],
      contacts: [],
      courseId: "",
      cName: "",
      cDesc: "",
      cFees: "",
      cResource: "",
    };
    this.onSubmitCourseForm = this.onSubmitCourseForm.bind(this);
  }
  componentDidMount() {
    UserDataService.getAllUsers().then((response) => {
      this.setState({
        users: response.data,
      });
    });
    CourseDataService.getAllCourses().then((response) => {
      this.setState({
        courses: response.data,
      });
    });
    ContactDataService.getAllContact().then((response) => {
      this.setState({
        contacts: response.data,
      });
    });
    FeedbackDataService.getAllFeedback().then((response) => {
      this.setState({
        feedbacks: response.data,
      });
    });
  }
  onSubmitCourseForm(values) {
    let course = {};
    // course.courseId = values.courseId;
    course.cName = values.cName;
    course.cDesc = values.cDesc;
    course.cFees = values.cFees;
    course.cResource = values.cResource;
    CourseDataService.postCourse(course).then((response) => {
      this.props.history.push({
        pathname: "/admin",
        state: {message: "Course Added Successfully!"}
      })
      window.location.reload();
    });
  }
  render() {
    let courseId = this.state.courseId;
    let cName = this.state.cName;
    let cDesc = this.state.cDesc;
    let cFees = this.state.cFees;
    let cResource = this.state.cResource;
    // console.log(this.state.courses);
    return (
      <div>
        <h4>Admin Component</h4>
        <div className="container" id="div-message">{this.props.location.state && (<div className="alert alert-warning">{this.props.location.state.message}</div>)}</div>
        <div className="container mt-4">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="user-tab"
                data-toggle="tab"
                href="#user"
                role="tab"
                aria-controls="user"
                aria-selected="true"
              >
                Users
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="courses-tab"
                data-toggle="tab"
                href="#courses"
                role="tab"
                aria-controls="courses"
                aria-selected="false"
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="feedback-tab"
                data-toggle="tab"
                href="#feedback"
                role="tab"
                aria-controls="feedback"
                aria-selected="false"
              >
                Feedbacks
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="user"
            role="tabpanel"
            aria-labelledby="user-tab"
          >
            <div className="container mt-4">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.userId}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="courses"
            role="tabpanel"
            aria-labelledby="courses-tab"
          >
            <div className="container mt-4">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Fees</th>
                    <th scope="col">Id</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.courses.map((course) => (
                    <tr key={course.courseId}>
                      <td>{course.cName}</td>
                      <td>{course.cDesc}</td>
                      <td>{course.cFees}</td>
                      <td>{course.courseId}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div className="container mt-4">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ContactId</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Name</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.contacts.map((contact) => (
                    <tr key={contact.contactId}>
                      <td>{contact.contactId}</td>
                      <td>{contact.userId}</td>
                      <td>{contact.name}</td>
                      <td>{contact.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="feedback"
            role="tabpanel"
            aria-labelledby="feedback-tab"
          >
            <div className="container mt-4">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">FeedbackId</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Name</th>
                    <th scope="col">Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.feedbacks.map((feedback) => (
                    <tr key={feedback.fId}>
                      <td>{feedback.fId}</td>
                      <td>{feedback.userId}</td>
                      <td>{feedback.name}</td>
                      <td>{feedback.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="courseModel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Course
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <div className="container text-left">
                    <Formik
                      initialValues={{
                        courseId,
                        cName,
                        cFees,
                        cResource,
                        cDesc,
                      }}
                      onSubmit={this.onSubmitCourseForm}
                      validateOnBlur={false}
                      validateOnChange={false}
                      enableReinitialize={true}
                    >
                      {({ errors, touched, validateField, validateForm }) => (
                        <Form>
                          <div className="form-row mt-5">
                            {/*<div className="form-group col-md-6">
                              <label htmlFor="inputCourseId">CourseId*</label>
                              <Field
                                type="number"
                                className="form-control"
                                id="inputCourseId"
                                placeholder="Course Id"
                                name="courseId"
                                validate={validateValue}
                              />
                              {errors.courseId && (
                                <div className="text-danger">
                                  {errors.courseId}
                                </div>
                              )}
                              </div>*/}
                            <div className="form-group col-md-6">
                              <label htmlFor="inputCourseName">
                                Course Name*
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="inputCourseName"
                                placeholder="Course Name"
                                name="cName"
                                validate={validateValue}
                              />
                              {errors.cName && (
                                <div className="text-danger">
                                  {errors.cName}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputcFees">Course Fees</label>
                              <Field
                                type="number"
                                className="form-control"
                                id="inputcFees"
                                placeholder="Course Fees"
                                name="cFees"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputcResource">
                                Course Resource
                              </label>
                              <Field
                                type="file"
                                className="form-control"
                                id="inputcResource"
                                placeholder="Course Resource"
                                name="cResource"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="inputcDesc">
                                Course Description
                              </label>
                              <Field
                                type="text"
                                className="form-control"
                                id="inputcDesc"
                                placeholder="Course Desc"
                                name="cDesc"
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminComponent;
