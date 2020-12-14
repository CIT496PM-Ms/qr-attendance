//This code is based on the Youtube tutorial
import React, { Component } from "react";
import './InputPassString.css';

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

class passString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passString: null,
      formErrors: {
        passString: ""
      }
    };
  }
  
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Pass String: ${this.state.passString}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  //function that checking if the student input 10 characters for the pass string
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "passString":
        formErrors.passString =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    //This creates the input place for student, and the button to submit the pass string
    return (
      <div className="wrapper3">
        <div className="form-wrapper3">
          <h1>Pass String Input</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="v">
              <label htmlFor="passString">Pass String:</label>
              <input
                className={formErrors.passString.length > 0 ? "error" : null}
                placeholder="Pass String"
                type="text"
                name="passString"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.passString.length > 0 && (
                <span className="errorMessage">{formErrors.passString}</span>
              )}
            </div>
            <div className="passString">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default passString;
