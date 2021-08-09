import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
import ContactDataService from "../../api/ContactDataService";
import FeedbackDataService from "../../api/FeedbackDataService";
import UserDataService from "../../api/UserDataService";
import UserCourseDataService from "../../api/UserCourseDataService";
import { userId } from "../../api/staticConfig";
import moment from "moment";
// function validateValue(value) {
//   let error;
//   if (!value) {
//     error = "Required";
//   }
//   return error;
// }
class UserComponent extends Component {
  constructor() {
    super();
    this.state = {
      allCourses: [],
      newCourses: [],
      enrolledCourses: [],
      contactId: "",
      message: "",
      fId: "",
      feedback: "",
      userId: "",
      name: "",
      email: "",
      phoneNo: "",
    };
    this.handleSubmitContactForm = this.handleSubmitContactForm.bind(this);
    this.handleSubmitFeedbackForm = this.handleSubmitFeedbackForm.bind(this);
    this.handleEnrollCourse = this.handleEnrollCourse.bind(this);
  }
  componentDidMount() {
    UserDataService.getUserByEmail(sessionStorage.getItem("userEmail")).then(
      (response) => {
        // console.log(response);
        this.setState({
          userId: response.data.userId,
          name: response.data.name,
          phoneNo: response.data.phoneNo,
          email: response.data.email,
        });
      }
    );
    UserCourseDataService.getAllNewCourses(userId).then((response) => {
      this.setState({
        newCourses: response.data,
      });
    });
    UserCourseDataService.getUserCourseByUserId(userId).then((response) => {
      this.setState({
        enrolledCourses: response.data,
      });
    });
  }
  handleEnrollCourse(courseId, cName, cDesc, cFees) {
    let userCourse = {};
    userCourse.courseId = courseId;
    userCourse.userId = userId;
    userCourse.cName = cName;
    userCourse.cDesc = cDesc;
    userCourse.cFees = cFees;
    userCourse.timestamp = moment().format();
    UserCourseDataService.postUserCourse(userCourse).then((response) => {
      window.location.reload();
    });
  }
  handleSubmitContactForm(values) {
    let contact = {};
    contact.contactId = values.contactId;
    contact.message = values.message;
    contact.userId = values.userId;
    contact.name = values.name;
    contact.email = values.email;
    contact.phoneNo = this.state.phoneNo;
    ContactDataService.postContact(contact).then((response) => {
      this.props.history.push({
        pathname: `/user/${values.userId}`,
        state: { message: "Message Sent Successfully" },
      });
      window.location.reload();
    });
  }
  handleSubmitFeedbackForm(values) {
    let feedback = {};
    feedback.fId = values.fId;
    feedback.feedback = values.feedback;
    feedback.userId = values.userId;
    feedback.name = values.name;
    feedback.email = values.email;
    FeedbackDataService.postFeedback(feedback).then((response) => {
      this.props.history.push({
        pathname: `/user/${feedback.userId}`,
        state: { message: "Feedback Sent Successfully" },
      });
      window.location.reload();
    });
  }

  render() {
    let contactId = this.state.contactId;
    let message = this.state.message;
    let fId = this.state.fId;
    let feedback = this.state.feedback;
    let userId = this.state.userId;
    let name = this.state.name;
    let email = this.state.email;
    
    return (
      <div>
        <h4>Welcome {this.state.name}</h4>
        <div className="container" id="div-message">{this.props.location.state && (<div className="alert alert-warning">{this.props.location.state.message}</div>)}</div>
        
        <div className="container mt-4">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="enrolledCourses-tab"
                data-toggle="tab"
                href="#enrolledCourses"
                role="tab"
                aria-controls="enrolledCourses"
                aria-selected="true"
              >
                Enrolled Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="newCourses-tab"
                data-toggle="tab"
                href="#newCourses"
                role="tab"
                aria-controls="newCourses"
                aria-selected="false"
              >
                New Courses
              </a>
            </li>
          </ul>
          <div className="tab-content " id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="enrolledCourses"
              role="tabpanel"
              aria-labelledby="enrolledCourses-tab"
            >
              <div className="row">
                {this.state.enrolledCourses.map((course)=>(
                    <div className="col-md-4 mt-5" key={course.courseId}>
                      <div className="card">
                        <input type="image" alt="This is descriptive!" />
                        {/* <img className="card-img-top" src="" alt={"demo image"} /> */}
                        <div className="card-body">
                          <h5 className="card-title">{course.cName}</h5>
                          <p className="card-text">{course.cDesc}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade show"
              id="newCourses"
              role="tabpanel"
              aria-labelledby="newCourses-tab"
            >
              <div className="row">
                {this.state.newCourses.map((course)=>(
                    <div className="col-md-4 mt-5" key={course.courseId}>
                      <div className="card">
                        <input type="image" alt="This is descriptive!" />
                        {/* <img className="card-img-top" src="" alt="demo image" /> */}
                        <div className="card-body">
                          <h5 className="card-title">{course.cName} - {course.cFees}</h5>
                          <p className="card-text">{course.cDesc}</p>
                          <button className="btn btn-primary" onClick={() =>
                            this.handleEnrollCourse(
                              course.courseId,
                              course.cName,
                              course.cDesc,
                              course.cFees
                            )
                          }>Enroll</button>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Contact Model  */}
        <div
          className="modal fade"
          id="contactModel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Contact
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
                        contactId,
                        userId,
                        name,
                        email,
                        message,
                      }}
                      onSubmit={this.handleSubmitContactForm}
                      validateOnBlur={false}
                      validateOnChange={false}
                      enableReinitialize={true}
                    >
                      {({ errors, touched, validateField, validateForm }) => (
                        <Form>
                          <div className="form-row mt-5">
                            {/*<div className="form-group col-md-6">
                              <label htmlFor="inputContactId">ContactId*</label>
                              <Field
                                type="number"
                                className="form-control"
                                id="inputContactId"
                                placeholder="Contact Id"
                                name="contactId"
                                validate={validateValue}
                              />
                              {errors.contactId && (
                                <div className="text-danger">
                                  {errors.contactId}
                                </div>
                              )}
                              </div>*/}
                            <div className="form-group col-md-6">
                              <label htmlFor="inputUserId">UserId</label>
                              <Field
                                type="number"
                                className="form-control"
                                id="inputUserId"
                                name="userId"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputUsername">User Name</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="inputUsername"
                                name="name"
                                disabled
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail">Email</label>
                              <Field
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                name="email"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="inputMessage">Message</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="inputMessage"
                                placeholder="Message"
                                name="message"
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Contact
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
        {/* feedback Model  */}
        <div
          className="modal fade"
          id="feedbackModel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Feedback
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
                        fId,
                        userId,
                        name,
                        email,
                        feedback,
                      }}
                      onSubmit={this.handleSubmitFeedbackForm}
                      validateOnBlur={false}
                      validateOnChange={false}
                      enableReinitialize={true}
                    >
                      {({ errors, touched, validateField, validateForm }) => (
                        <Form>
                          <div className="form-row mt-5">
                            {/*<div className="form-group col-md-6">
                              <label htmlFor="inputFeedbackId">
                                FeedbackId*
                              </label>
                              <Field
                                type="number"
                                className="form-control"
                                id="inputFeedbackId"
                                placeholder="Feedback Id"
                                name="fId"
                                validate={validateValue}
                              />
                              {errors.fId && (
                                <div className="text-danger">{errors.fId}</div>
                              )}
                              </div>*/}
                            <div className="form-group col-md-6">
                              <label htmlFor="inputUserId">UserId</label>
                              <Field
                                type="number"
                                className="form-control"
                                id="inputUserId"
                                name="userId"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputUsername">User Name</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="inputUsername"
                                name="name"
                                disabled
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputEmail">Email</label>
                              <Field
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                name="email"
                                disabled
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="inputMessage">Feedback</label>
                              <Field
                                type="text"
                                className="form-control"
                                id="inputMessage"
                                placeholder="Feedback"
                                name="feedback"
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Send Feedback
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
export default UserComponent;
