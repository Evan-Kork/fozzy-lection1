var app = angular.module('todoList', []);
app.factory('ProductsList', [function() {
	let productsList = [
		{name: 'Pivo', count: 1}, 
		{name: 'Vodka', count: 1},
		{name: 'Icecream', count: 1}];
	let factory = {
		getProductsList: () => {
			return productsList;
		},
		addProduct: (newProduct) => {
			productsList.push(newProduct);
			return factory.getProductsList();
		}
	}
	return factory;
}]);

app.controller('CtrlTodoList', ['$scope', '$filter', 'ProductsList', function($scope, $filter, ProductsList) {
	$scope.helloText = 'Helloo World';
	$scope.productsList = ProductsList.getProductsList();
	$scope.newProduct = '';
	// $scope.addProduct = () =>{
	// 	console.log('addProduct', $scope.newProduct, $scope.productsList);
	// 	$scope.productsList.push({name: $scope.newProduct});
	// 	$scope.newProduct = '';
	// }
	$scope.addProduct = () => {
		$scope.productsList = ProductsList.addProduct({name: $scope.newProduct});
	}
	$scope.deleteProduct = (index) => {
		$scope.productsList = $filter('filter')(
			$scope.productsList,
			(product, indexProduct) => {
				return indexProduct !== index;
			}
		);
	}
	$scope.changeCount = function (itemCount112, test) {
		console.log('changeCount', itemCount112, test);
	}
}]);

app.directive('itemCounter', () => {
	return {
		restrict: 'E',
		templateUrl: 'count-template.html',
		scope: {
			count: '=countItem',
			changeCount: '&changeCount'
		},
		link: function(scope) {
			scope.countMinus = () => {
				scope.count = scope.count - 1;
				console.log('scope', scope);
				scope.changeCount({itemCount: '-1'});
			};
			scope.countPlus = () => {
				scope.count = scope.count + 1;
				scope.changeCount({itemCount: '+1', test: 123});
			};
		}
	}
});
