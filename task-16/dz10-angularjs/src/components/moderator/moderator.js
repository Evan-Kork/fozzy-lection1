app.component('moderator', {
    templateUrl: "src/components/moderator/moderator.html",
    controllerAs: "moderatorCtrl",
    controller: ['$scope', '$window', '$filter', 'chatService', 'moderatorService', function ($scope, $window, $filter, chatService, moderatorService) {
        $scope.unapprovedStorage = chatService.getInitialStorage();
        $scope.approveMessage = (index) => {
            $scope.unapprovedStorage = moderatorService.approveMessage(index);
            $window.localStorage.setItem('unapprovedStorage', angular.toJson($scope.unapprovedStorage));
        };
        $scope.deleteMessage = (index) => {
            $scope.unapprovedStorage = moderatorService.deleteMessage(index);
            $window.localStorage.setItem('unapprovedStorage', angular.toJson($scope.unapprovedStorage));
        };

        $scope.emptyMessageList = () => {
            if ($scope.unapprovedStorage.length === 0) {
                return true;
            } else {
                return false;
            }
        }

    }]
    }
);