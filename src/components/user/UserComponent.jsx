import React, { Component } from "react";
import { Field, Form, Formik } from "formik";
function validateValue(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}
class UserComponent extends Component {
  constructor() {
    super(this);
    this.state = {
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
  }
  handleSubmitContactForm(values) {}
  handleSubmitFeedbackForm(values) {}
  render() {
    let contactId = this.state.contactId;
    let message = this.state.message;
    let fId = this.state.fId;
    let feedback = this.state.feedback;
    let userId = this.state.userId;
    let name = this.state.name;
    let email = this.state.email;
    let phoneNo = this.state.phoneNo;
    return (
      <div>
        <h4>User Component</h4>
        <div className="container"></div>
        {/* Contact Model  */}
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
                  Contact
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
                        contactId,
                        userId,
                        name,
                        email,
                        phoneNo,
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
                            <div className="form-group col-md-6">
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
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputUserId">UserId*</label>
                              <Field
                                type="number"
                                className="form-control"
                                id="inputUserId"
                                name="iserId"
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
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
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
        {/* feedback Model  */}
      </div>
    );
  }
}
export default UserComponent;
