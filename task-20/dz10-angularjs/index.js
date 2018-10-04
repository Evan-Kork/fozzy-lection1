'use strict';

let app = angular.module('app', []);

app.factory('MessagesList', [function() {
	let messagesList = [
		{title: 'Title1', user: 'User1', text: 'Text1'},
		{title: 'Title2', user: 'User2', text: 'Text2'},
		{title: 'Title3', user: 'User3', text: 'Text3'}
	];
	let factory = {
		getMessagesList: () => {
			return messagesList;
		},
		addMessage: (newMessage) => {
			messagesList.push(newMessage);
			return factory.getMessagesList();
		}
	}
	return factory;
}]);

app.controller('CtrlChatList', ['$scope', '$filter', 'MessagesList', function($scope, $filter, MessagesList) {
	$scope.messagesList = MessagesList.getMessagesList();
	$scope.message = {title: '', user: '', text: ''};
	$scope.message.newTitle = '', $scope.message.newUser = '', $scope.message.newText = '';
	$scope.addMessage = () => {
		$scope.message = {title: $scope.message.newTitle, user: $scope.message.newUser, text: $scope.message.newText};
		$scope.messagesList = MessagesList.addMessage($scope.message);
		$scope.message.newTitle = '', $scope.message.newUser = '', $scope.message.newText = '';
	};
}]);

app.directive('chat', function() {
	return {
		scope:false,
		template: "<div class='messageblock' ng-repeat='message in messagesList'>{{message.title}} | {{message.user}} <br> {{message.text}}</div>",
		link: function (scope, element, attrs) {
			console.log('scope', scope, 'element', element, 'attrs', attrs);
		}
	};
});
