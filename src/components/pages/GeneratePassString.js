import React, { Component } from "react";
import GenPassFunction from "./GenPassFunction";
import './GenPassFunction.js';
import './GeneratePassString.css';

class GeneratePassString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passString: null,
      formErrors: {
      passString: ""
      }
    };
  }

  
  render() {
    return (
      <div className='genPassString'>
        <div className='formGenPassString'>
          <GenPassFunction></GenPassFunction>
        </div>
      </div>
    );
  }
}

export default GeneratePassString;