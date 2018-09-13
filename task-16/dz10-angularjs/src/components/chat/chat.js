app.component('chat', {
    templateUrl: "src/components/chat/chat.html",
    controllerAs: "chatCtrl",
    controller: (['$scope','$window','chatService', 'loginService', function($scope, $window, chatService, loginService) {
        $scope.newMessage = '';
        $scope.approvedStorage = chatService.getCurrentStorage();
        $scope.reversedArray = $scope.approvedStorage.slice().reverse();
        $scope.unapprovedStorage = chatService.getInitialStorage();
        $scope.sendMessage = () => {
            $scope.userData = loginService.getUserData();
            chatService.sendMessage($scope.userData, $scope.newMessage);
            alert('your message has to be checked');
            $scope.newMessage = '';
        };
        $scope.myMessage = (index) => {
            if (loginService.getUserData().name === $scope.reversedArray[index].username) {
                return true;
            } else {
                return false;
            }
        };
        $scope.emptyChat = () => {
            if (chatService.getCurrentStorage().length === 0) {
                return true;
            } else {
                return false;
            }
        };
    }])
});
