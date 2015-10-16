var React = require('react');
var Cells = require('./Cells.react')

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<Cells order="10"/>
			</div>
		)
	}
});