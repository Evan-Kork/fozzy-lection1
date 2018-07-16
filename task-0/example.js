'use strict';
start();
function start() {
	console.log('start');
}
// initVar();
var initVar = {
	name: 'test',
	initFunction: function() {
		console.log('this', this);
		setTimeout(() => {
			console.log(this);
		}, 1000);
		let testFunction1 = function(argument1 = []) {
			console.log('testFunction1', this, arguments);
		};
		testFunction1('function');
		let testFunction2 = (argument1 = []) => {
			console.log('testFunction2', this, arguments);
		};
		testFunction2('function');
	}
}
initVar.initFunction('test1', undefined);
// initLet();
let initLet = function() {
	let name = 'vasya';
	console.log('init let');
	var self1 = this;
	
	console.log(this);
	setTimeout(function() {
		console.log(self1);
	}, 1000);
}
initLet();
setTimeout(function() {
	console.log('self', self1);
})
func.call(this, arg1, arg2, arg3);
func.apply(this, [arg1, arg2, arg3]);