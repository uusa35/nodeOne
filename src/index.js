/**
 * Created by usamaahmed on 2/16/17.
 */
//var moduleOne = require('./module1.js');
//require('./module2.js');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var $ = require('jquery');

$(document).ready(function () {
    console.log('from inside jquery again');
    ReactDOM.render(<App/>, document.getElementById('app'));
});
//var app = document.getElementById('app');
//app.innerHTML = '<h1>from inside the app ' + moduleOne.first +'</h1>';
//console.log(moduleOne.first);
//moduleOne.test();