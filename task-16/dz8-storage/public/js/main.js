
//Defines whether the user in local or session Storage
function defineStorage () {
    if (localStorage.getItem('user') !== null) {
        let userData = JSON.parse(localStorage.getItem('user'));
        return userData;
    }
    else if (sessionStorage.getItem('user') !== null) {
        let userData = JSON.parse(sessionStorage.getItem('user'));
        return userData;
    }
};
//To set or remove local or session storage
function runItem (obj, action) {
    if (localStorage.getItem('user') !== null) {
        if (action === 'setItem')
        localStorage.setItem('user', JSON.stringify(obj));
        if (action === 'removeItem')
        localStorage.removeItem('user');
    }
    else if (sessionStorage.getItem('user') !== null) {
        if (action === 'setItem')
        sessionStorage.setItem('user', JSON.stringify(obj));
        if (action === 'removeItem')
        sessionStorage.removeItem('user');
    };
};

function saveUserIntoCollection(userData) {
    usersArray = JSON.parse(localStorage.getItem('users')) || [];
    usersArray.push(userData);
    localStorage.setItem('users', JSON.stringify(usersArray))
}

//Redirecting when user is in local storage
if ($('body.loginization').length > 0) {
    $(document).ready(function () {
        if (JSON.parse(localStorage.getItem('Exit')) === true || localStorage.getItem('Back') === true) {
            localStorage.removeItem('Exit');
            localStorage.removeItem('Back');
            return;
        }
        else if (localStorage.getItem('user') !== null) {
            window.location.href = 'index.html';
        }
})}; 



//loginization
$('.btn.log-in').click(function LoginUser() {
    event.preventDefault();
    let self = event.target;
    usersArray = JSON.parse(localStorage.getItem('users')) || [];
    let emailInput = $(self).parent().find('input[type=email]')[0].value;
    let passwordInput = $(self).parent().find('input[type=password]')[0].value;
    userData = usersArray.find(obj => {
        return obj.email === emailInput
      });
    if (userData !== undefined) {
        let email = userData.email;
        let password = userData.password;
        if (email !== emailInput || password !== passwordInput){
            displayError(self, 'Email or password are wrong');
        }
        else if (email === emailInput && password === passwordInput ) {
            if ($('input[type=checkbox]').prop('checked') == true) {
                runItem(userData, 'removeItem')
                sessionStorage.setItem('user', JSON.stringify(userData));
            }
            else {
                localStorage.setItem('user', JSON.stringify(userData));
            }
            window.location.href = 'index.html';
            alert('You are loggin in!')

        } else if (email !== emailInput && password !== passwordInput) {
            displayError(self, 'No user with such data');
        }
    } else {
        displayError(self, 'No user with such data');
    }
});
/**
 * displays error
 * @param {obj} self 
 * @param {Error text} string 
 */
function displayError(self, string) {
    let error = $(self).parents().find('.error')[0];
    $(error).html(string).css({"color": "red", "font-size":"20px", "margin-top":"10px"});
}; 


//registration
$('.register').click( function() {
    registerUser(event.target);
});
var usersArray = [];

function registerUser(self) {
    usersArray = JSON.parse(localStorage.getItem('users')) || [];
    let username = $(self).parents('.card-body').find('input[type=username]')[0].value;
    if (username === '') {
        displayError(self, 'Username must be filled');
        event.preventDefault();
        return;
    }
    let email = $(self).parents('.card-body').find('input[type=email]')[0].value;
    if (email === '') {
        displayError(self, 'email must be filled');
        event.preventDefault();
        return;
    }
    let userInList = usersArray.find(obj => {
        return obj.email === email;
      });
    if (userInList !== undefined) {
        displayError(self, 'This email is already in use');
        event.preventDefault();
        return;
    }
    let password = $(self).parents('.card-body').find('input[type=password]')[0].value;
    if (password === '') {
        displayError(self, 'password must be filled');
        event.preventDefault();
        return;
    }
    let confirmPassword = $(self).parents('.card-body').find('input[type=confirm-password]')[0].value;
    if (password !== confirmPassword) {
        displayError(self, 'Passwords don\'t coincide!');
        event.preventDefault();
        return;
    }
    let about = $(self).parents('.card-body').find('textarea')[0].value;
    let userData = {
        username: username,
        email: email,
        password: password,
        about: about,
        posts: [],
        lastVisit: null
    };
    saveUserIntoCollection(userData);
    localStorage.setItem('user', JSON.stringify(userData));
};

//Shows the homepage with user info
if ($('body.homepage').length > 0) {
    debugger;
    userData = defineStorage();
    sayHello(userData);
    showProfile(userData);
    showPost();
};
  
/**
 * 
 * @param {obj} userData 
 */
function sayHello (userData) {
    $('.welcome .greeting').html(`Hello, ${userData.username}!`);
    if (userData.lastVisit !== null)
    $('.last-visit').html(`You have been here on ${userData.lastVisit}`)
    else if (userData.lastVisit === null) {
    $('.last-visit').html('It is your first time here');
    }
};
/**
 * 
 * @param {obj} userData 
 */
function showProfile(userData) {
    $('.profile .info .name').html(`Your username is ${userData.username}`)
    $('.profile .info .email').html(`Your email is ${userData.email}`)
    $('.profile .info .about').html(`About you: ${userData.about}`)
};

$('.btn.btn-primary.save').click(function editProfile() {
    let userData = defineStorage();
    userData.username = $(event.target).parents('form').find('input[type=username]')[0].value;
    console.log(userData.username);
    let textarea = $(event.target).parents('form').find('textarea')[0];
    $(textarea).text(userData.about);
    userData.about = $(event.target).parents('form').find('textarea')[0].value;
    updateUserInCollection(userData);
    runItem(userData, 'setItem');    
});

function updateUserInCollection(userData) {
    usersArray = JSON.parse(localStorage.getItem('users')) || [];
    let userInList = usersArray.find(obj => {
        return userData.email === obj.email
    });
    usersArray[usersArray.indexOf(userInList)] = userData;
    localStorage.setItem('users', JSON.stringify(usersArray));
}

//addes new post into user obj and then storage
function writePost(self) {
    let userData = defineStorage();
    let textarea = $(self).parent().find('textarea')[0]
    let newPost = textarea.value;
    let date = new Date();
    let addedPost = $(self).parents('.write-post').next('.previous-posts')[0];
    $('.previous-posts').find('p').hide();
    let postObj = {
        id: new Date().getTime().toString(),
        date: date.toUTCString(),
        post: newPost,
        like: 0
    };
    let newPosted = $(addedPost).append(`<div class="post-container">
                                            <div class="post-box">
                                                <div class="date">${date.toUTCString()}</div>
                                                <div class="post">${newPost}</div>
                                            </div>
                                            <div class="like-box">
                                                <div class="like" onclick="getLike(${postObj.id})"></div>
                                                <div class="number">${postObj.like}</div>
                                            </div>
                                            </div>
                                            <div class="button-box">
                                                <button class="btn" onclick="deletePost(${postObj.id})">Delete</button>
                                            </div>`);
    userData.posts.push(postObj);
    updateUserInCollection(userData);
    runItem(userData, 'setItem');
    textarea.value = "";
};

$('.write-new').click(function() {
    event.preventDefault;
    let self = event.target;
    writePost(self); 
});

//shows post on homepage
function showPost () {
    usersArray = JSON.parse(localStorage.getItem('users'));
    let userData = defineStorage();
    if (userData.posts.length !== 0 && userData.posts !== undefined) {
        $('.previous-posts').find('p').hide();
        let addedPost = $('.previous-posts')[0];
        postObj = {};
        for (let i = 0; i < userData.posts.length; i++) {
            let newPosted = $(addedPost).append(`<div class="post-container">
            <div class="post-box">
            <div class="date">${userData.posts[i].date}</div>
            <div class="post">${userData.posts[i].post}</div>
            </div>
            <div class="like-box">
            <div class="like" onclick="getLike(${userData.posts[i].id})"></div>
            <div class="number">${userData.posts[i].like}</div>
            </div>
            </div>
            <div class="button-box">
            <button class="btn delete-post" onclick="deletePost(${userData.posts[i].id})">Delete</button>
            </div>`);
            }
        }
}
/**
 * deletes  post from user obj
 * @param {string} id 
 */
function deletePost(id) {
    userData = defineStorage();
    let postLike = userData.posts.find(obj => {
        return obj.id == id;
    });
    userData.posts.splice((userData.posts.indexOf(postLike)), 1);
    $(event.target).hide();
    $(event.target).parent().prev().hide();
    runItem(userData, 'setItem')
    updateUserInCollection(userData);
    if (userData.posts.length == 0) {
        $('.previous-posts').find('p').show();
    }
}
//deletes user obj from collection of users
$('.delete').click(function() {
    userData = defineStorage();
    usersArray = JSON.parse(localStorage.getItem('users'));
    let userInList = usersArray.find(obj => {
        return obj.email === userData.email;
    });
    usersArray.splice((usersArray.indexOf(userInList)), 1);
    localStorage.setItem('users', JSON.stringify(usersArray));
    runItem(userData, 'removeItem')
    window.location.href = 'login.html';
})

//adds like on click and saves it into user obj
function getLike(id) {
    userData = defineStorage();
    let postLike = userData.posts.find(obj => {
        return obj.id == id;
    });
    let number = $(event.target).next();
    $(number).html( +postLike.like + 1);
    postLike.like = $(number).html();
    runItem(userData, 'setItem')
    usersArray = JSON.parse(localStorage.getItem('users')); 
    let userInList = usersArray.find(obj => {
        return obj.email === userData.email;
      });
    usersArray[usersArray.indexOf(userInList)] = userData;
    localStorage.setItem('users', JSON.stringify(usersArray));
};

$('.exit').click(function () {
    localStorage.setItem('Exit', true);
    showLastVisit();
})

$('back-button').click(function () {
    localStorage.setItem('Back', true);
})

//shows user's last visit
function showLastVisit () {
    userData = defineStorage();
    date = new Date();
    userData.lastVisit = `${getDayOfWeek(date.getDay())}, ${date.getDate()} ${getNameMonth(date.getMonth())}`;
    updateUserInCollection(userData);
}

function getDayOfWeek(number) {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[number];
}

function getNameMonth (number) {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return months[number];
}