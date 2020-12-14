import React, { Component } from "react";
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
  
  //Generate unique random pass string based on the post on Stackoverflow
  GenPass() {
    var pass ="";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
    for (var i = 0; i < 10; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

      this.setState({passString: pass})
      console.log(pass);
  }

  //Create a button that trigger the GenPass function, and print out on screen
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
