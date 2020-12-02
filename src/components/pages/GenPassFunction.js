import React from 'react'

function GenPassFunction() {
    var pass = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 10; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return pass;
  }

  export default GenPassFunction;