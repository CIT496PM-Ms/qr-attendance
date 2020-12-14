//This code is based on the Youtube tutorial, and this is for the Login function in this project.

import React, { Component } from "react";
import './Login.css';

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      csunID: null,
      password: null,
      formErrors: {
        csunID: "",
        password: ""
      }
    };
  }

  //The function checks if the user input the CSUN ID and Password
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        CSUN ID: ${this.state.csunID}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  //This function checks if the user input the required number of chracters for CSUN ID and Password
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "csunID":
        formErrors.csunID =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  //This generate the input places for CSUN ID and Password, and also the loing button
  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper1">
        <div className="form-wrapper1">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="csunID">
              <label htmlFor="csunID">CSUN ID</label>
              <input
                className={formErrors.csunID.length > 0 ? "error" : null}
                placeholder="CSUN ID"
                type="text"
                name="csunID"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.csunID.length > 0 && (
                <span className="errorMessage">{formErrors.csunID}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="login">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
