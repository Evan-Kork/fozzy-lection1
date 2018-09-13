app.component('admin', {
    templateUrl: 'src/components/admin/admin.html',
    controllerAs: 'adminCtrl',
    controller: ['$scope', '$window', '$filter', 'adminService', '$rootScope', 'chatService', 'loginService', function ($scope, $window, $filter, adminService, $rootScope, chatService, loginService) {
        $scope.usersArray = loginService.getUsersArray();
        $scope.approvedStorage = chatService.getCurrentStorage();
        $scope.isAssigned = [];
        $scope.startEdit = [];
        $scope.approvedStorage.map((e) => {
            $scope.startEdit.push(!e);
        })
        $scope.usersArray.map((e) => {
            $scope.isAssigned.push(!e);
        })
        $scope.deleteMessage = (index) => {
            adminService.deleteMessage(index)
        };
        $scope.editMessage = (index) => {
            $scope.startEdit[index] = true;
        };
        $scope.saveMessage = function (index) {
            $scope.startEdit[index] = false;
            $window.localStorage.setItem('messages', JSON.stringify($scope.approvedStorage));
        }

        $scope.assignModerator = (index) => {
            $scope.isAssigned[index] = adminService.assignModerator(index, $scope.usersArray);
        }

        $scope.getUserRole = (index) => {
            if ($scope.usersArray[index].role !== 'user') {
                return true;
            } else {
                false;
            }
        }

        $scope.emptyMessageList = () => {
            if ($scope.approvedStorage.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    }]
    }
);