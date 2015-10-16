var AppDispatcher = require('../dispatcher/AppDispatcher');
var MatrixConstants = require('../constants/MatrixConstants');

var MatrixActions = {
	changeMatrix: function(data) {
		AppDispatcher.dispatch({
			actionType: MatrixConstants.CELL_CLICKED,
			action: data
		});
	}
}

module.exports = MatrixActions;