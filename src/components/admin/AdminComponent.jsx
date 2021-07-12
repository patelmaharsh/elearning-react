import React, { Component } from "react";
import CourseDataService from "../../api/CourseDataService";
import UserDataService from "../../api/UserDataService.js";
import { Field, Form, Formik } from "formik";
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
  }
  onSubmitCourseForm(values) {
    let course = {};
    course.courseId = this.state.courseId;
    course.cName = this.state.cName;
    course.cDesc = this.state.cDesc;
    course.cFees = this.state.cFees;
    course.cResource = this.state.cResource;
    CourseDataService.postCourse(course).then((response) => {
      window.location.reload();
    });
  }
  render() {
    let courseId = this.state.courseId;
    let cName = this.state.cName;
    let cDesc = this.state.cDesc;
    let cFees = this.state.cFees;
    let cResource = this.state.cResource;
    console.log(this.state.courses);
    return (
      <div>
        <h4>Admin Component</h4>
        <div className="container">
          <div className="row container">
            <div className="col-md-6">
              <h5>Users</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.userId}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phoneNo}</td>
                      <td>
                        <button className="btn btn-warning">Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h5>Courses</h5>
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
        </div>

        <div
          class="modal fade"
          id="courseModel"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add Course
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
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
                            <div className="form-group col-md-6">
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
                            </div>
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
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
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
