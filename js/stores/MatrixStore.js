var AppDispatcher = require('../dispatcher/AppDispatcher');
var MatrixConstants = require('../constants/MatrixConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _matrix = [[]];

var changeMatrix = function(row, col) {
	for (var i = 0; i < _matrix.length; i++) {
		for (var j = 0; j < _matrix[i].length; j++) {
			if (i == row || j == col) {
				_matrix[i][j] = 1 - _matrix[i][j];
			}
		}
	}
}

var shuffleMatrix = function(order) {
	_matrix = [];
	for (var i = 0; i < order; i++) {
		_matrix.push([]);
		for (var j = 0; j < order; j++) {
			_matrix[i].push(1)
		};
	};
}

var MatrixStore = assign({}, EventEmitter.prototype, {
	getMatrix: function() {
		return _matrix;
	},

	shuffleMatrix: function(order) {
		shuffleMatrix(order);
	},

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function (callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch (payload.actionType) {
		case MatrixConstants.CELL_CLICKED:
			changeMatrix(action.data.row, action.data.col);
			break;
		default:
			return true;
	}
	MatrixStore.emitChange();
	return true;
})

module.exports = MatrixStore;