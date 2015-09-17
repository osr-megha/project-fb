function testifelseusername (input) {
    var username = input.username;
    var password = input.password;
    var message;
    if (username == "admin" && password == "Password%1") {
        console.log("success : true");
        message = "success : true";
    } else {
        console.log("success : false");
        message = "success : false";
    }

    return message;
}

exports = exports || window;
exports.testifelseusername = testifelseusername;
