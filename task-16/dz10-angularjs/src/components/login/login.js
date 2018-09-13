app.component('login', {
    templateUrl: "src/components/login/login.html",
    controllerAs: "loginCtrl",
    controller: (['$scope', '$rootScope', '$window', 'loginService', 'localStorageService',function($scope, $rootScope, $window, loginService, localStorageService) {
        $scope.name = 'ilona';
        $scope.passUser = '123';
        $scope.isLogged = false;
        $scope.isAdmin = false;
        $scope.isModerator = false;
        $scope.data = {};
        $scope.logIn = function () {
            $scope.data =  loginService.logIn($scope.name, $scope.passUser);
            if ($scope.data === undefined) {
                $scope.isLogged = false; 
                return;
            } else {
                $scope.isLogged = true; 
            }
            if ($scope.data.role === 'admin') {
                $scope.isAdmin = true;
            }  else if ($scope.data.role === 'moderator') {
                $scope.isModerator = true;
            }         
            return $scope.data;
        };

    }                  
])});
