import React from 'react';
import '../../App.css';
import './GeneratePassString.css';

function GeneratePassString(length) {

  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export default GeneratePassString;
