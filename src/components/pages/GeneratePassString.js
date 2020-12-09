import React, { Component } from "react";
//import GenPassFunction from "./GenPassFunction";
//import './GenPassFunction.js';
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
  
  GenPass() {
    var pass ="";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
    for (var i = 0; i < 10; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

      this.setState({passString: pass})
      console.log(pass);
  }

  render() {
    return (
      <div className='genPassString'>
        <div className='formGenPassString'>
          <h1>{this.state.passString}</h1>
        </div>
        <div className="genButton">
          <button onClick={() => this.GenPass()}>Generate</button>
        </div>
      </div>
    );
  }
}

export default GeneratePassString;
