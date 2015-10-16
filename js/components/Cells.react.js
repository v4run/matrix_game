var React = require('react');
var MatrixStore = require('../stores/MatrixStore');
var MatrixActions = require('../actions/MatrixActionCreators');

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			order: 4
		};
	},
	cellClicked: function(r, e, a) {
		var key = e.split('#');
		MatrixActions.changeMatrix({
			data: {
				row: parseInt(key[1]),
				col: parseInt(key[2])
			}
		});
		this.setState({
			values: MatrixStore.getMatrix()
		});
	},
	componentWillMount: function() {
		MatrixStore.shuffleMatrix(this.props.order);
		this.setState({
			values: MatrixStore.getMatrix()
		})
	},
	render: function() {
		var realThis = this;
		return (
			<ul>
			{
				this.state.values.map(function(row, i) {
					return (
						<li key={"row"+i} className="matrix-rows">
							<ul>
							{
								row.map(function(value, j){
									return <li key={"cell#"+i+"#"+j} className={"matrix-cells color-of-"+value} onClick={realThis.cellClicked}><span>{value}</span></li>
								})
							}
							</ul>
						</li>
					)
				})
			}
			</ul>
		);
	}
})