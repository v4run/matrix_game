var AppDispatcher = require('./dispatcher/AppDispatcher');
var MatrixApp = require('./components/MatrixApp.react');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
	<MatrixApp/>,
	document.getElementById('matrix-container')
)
