var app = angular.module("appChat", ['ui.router', 'LocalStorageModule', 'ui.bootstrap']);

let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];
let adminUser = usersArray.find(obj => {
    return obj.role === 'admin';
});

if (adminUser === undefined) {
    usersArray.push({name: 'vova', password: 123, role: 'admin'})
}
localStorage.setItem('usersArray', JSON.stringify(usersArray));

app.config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('');    
});

app.config(['$stateProvider', function($stateProvider) {
    let login = {
        name: '/',
        url : '/',
        template: '<login></login>'
    };

    let admin = {
        name: 'admin',
        url : '/admin',
        template: '<admin></admin>'
    };

    let moderator = {
        name: 'moderator',
        url : '/moderator',
        template: '<moderator></moderator>'
    };

    $stateProvider.state(login);
    $stateProvider.state(admin);
    $stateProvider.state(moderator);
}]);

app.directive('adminButton', function() {
    return {
        restrict: 'E',
        template: '<button ui-sref="admin" class="btn btn-primary">View users</button>'
    }
});

app.directive('exitButton', function() {
    return {
        restrict: 'E',
        template: '<button ui-sref="/" class="btn btn-primary text-center m-2">Exit</button>'        
    }
});

app.directive('moderatorButton', function() {
    return {
        restrict: 'E',
        template: '<button ui-sref="moderator" class="btn btn-primary">View messages</button>'
    }
});

app.factory('chatService', function(localStorageService) {
    var factory = {
        getCurrentStorage: () => {
            return localStorageService.get('messages') || [];
        },

        getInitialStorage: () => {
            return localStorageService.get('unapprovedStorage') || [];
        },

        sendMessage: (userData, message) => {
            let messageData = {
                username: userData.name,
                message: message,
                role: userData.role,
                date: (new Date()).toUTCString()
            }
            let newMessageArr = factory.getInitialStorage();
            newMessageArr.push(messageData);
            localStorageService.set('unapprovedStorage', newMessageArr);                        
        },

        saveMessage: () => {
            localStorageService.set('unapprovedStorage', factory.getInitialStorage());            
        }
    }
    return factory;
});

app.factory('loginService', function(localStorageService) {
    let user = localStorageService.get('user');
    let usersArray = localStorageService.get('usersArray') || [];  
    factory = {
        getUserData:  () => {
            return user;
        },

        getUsersArray: () => {
            return usersArray;
        },

        checkUser: (name) => {             
            let userData = factory.getUsersArray().find(obj => {
                return obj.name === name;
            });
            return userData;
        },

        logIn: (username, password) => {
            let userData = {
                name: username,
                password: password
            };
            let currentUser = factory.checkUser(username);
            if (currentUser === undefined) {
                userData.role = 'user';
                factory.getUsersArray().push(userData);
                localStorageService.set('usersArray', factory.getUsersArray())
                currentUser = userData;
            }
            currentUser = user;
            localStorageService.set('user', currentUser);
            return currentUser;
        }
    }
    return factory;
});

app.factory('adminService', function($window, $filter, chatService, loginService) {
    let admin = {};
    factory = {
        getAdmin: () => {
            return admin;
        },

        deleteMessage: (index) => {
                var approved = $filter('filter')(chatService.getCurrentStorage(), 
                    (message, indexMessage) => {
                    return indexMessage !== index;
                });
        },

        startEdit: (index) => {
            let startEdit = [];
            startEdit[index] = true;            
        },

        assignModerator: (index, usersArray) => {
            let listOfUsers = loginService.getUsersArray();
            let previousModerator = listOfUsers.find(obj => {
                return obj.role === 'moderator'; 
              })
            if ( previousModerator !==  undefined) {
                previousModerator.role = 'user';
            }
            let arrayOfUsers = loginService.getUsersArray();
            console.log(arrayOfUsers[index]);
            
            let user = arrayOfUsers[index];
            user.role = 'moderator';
            arrayOfUsers[loginService.getUsersArray().indexOf(user)] = user;
            $window.localStorage.setItem('usersArray', JSON.stringify(arrayOfUsers));  
            return true;    
        }
    }
    return factory;
} )

app.factory('moderatorService', function($window, chatService, $filter) {
    factory = {
        approveMessage: (index) => {
            let unapproved = chatService.getInitialStorage();
            let approved = chatService.getCurrentStorage();
            approved.push(unapproved[index]);
            unapproved = $filter('filter')(unapproved, (message, indexMessage) => {
              return indexMessage != index;
            });
            $window.localStorage.setItem('messages', $window.JSON.stringify(approved));
            $window.localStorage.setItem('unapprovedStorage', $window.JSON.stringify(unapproved));
            return unapproved;            
        },

        deleteMessage: (index) => {
            let unapproved = $filter('filter')(chatService.getInitialStorage(), 
                (message, indexMessage) => {
                    return indexMessage !== index;
                  }); 
            $window.localStorage.setItem('unapprovedStorage', $window.JSON.stringify(unapproved));                         
            return unapproved;
        }
    }
    return factory;
})