$(document).ready(function() {
    bindEvents() 
});

// linking 2 functions at on button ie for running passwordValidation function and create account function


function bindEvents() {
    var x = document.querySelector("#btn");
    x.addEventListener("click", passwordValidation);
    x.addEventListener("click", createaccount); 
    x.addEventListener("click", myLogin); 
    }

function passwordValidation() {
    if (username.value && username.value.trim().length === 0) {
        alert("Error: Username cannot be blank!");
        return false;
    }

    if (pwd.value != "" && pwd.value == pwd1.value) {
        if (pwd.value.length < 6) {
            alert("Error: Password must contain at least six characters!");
            return false;
        }
        if (pwd.value == username.value) {
            alert("Error: Password must be different from Username!");
            return false;
        }
        re = /[0-9]/ && /[a-z]/ && /[A-Z]/;
        if (!re.test(pwd.value)) {
            alert("Error: password must contain at least one number (0-9), one lowercase letter (a-z), one uppercase letter (A-Z)!");
            return false;
        }
        // re = /[a-z]/;
        // if(!re.test(pwd.value)) {
        //   alert("Error: password must contain at least one lowercase letter (a-z)!");
        //   return false;
        // }
        // re = /[A-Z]/;
        // if(!re.test(pwd.value)) {
        //   alert("Error: password must contain at least one uppercase letter (A-Z)!");
        //   return false;
        // }
    } else {
        alert("Error: Please check that you've entered same password & confirm password!");
        return false;
    }

    alert("You entered a valid password: " + pwd.value);
    return true;

}

// writing a function for showing the values of username, password & confirm password 
function createaccount() {
    console.log(document.querySelector("#username").value)
    console.log(document.querySelector("#pwd").value)
    console.log(document.querySelector("#pwd1").value)
}

function sendRequest (keyword) {
    $.ajax({
        url: '/testifelseusernameServer', 
        type: 'Post',
        data: {
            "input": {
                "username": "admin",
                "password": "Password%1"
            }
        },
        success: myLogin()
    });
}

function myLogin(data) {
    window.location.assign("http://localhost:8080/post");
}
