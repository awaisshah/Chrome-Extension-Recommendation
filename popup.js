//document.write("Hey recommender");
function signIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userObj = {
        "username": username,
        "password": password
    };
    var userObjString = JSON.stringify(userObj);

    /*chrome.storage.sync.set({'username': username}, function() {
        // Notify that we saved.
        message('Settings saved');
    });*/
    console.log("USER NAN<E :   "+username," "+typeof username);
    if(username != "" && password != ""){
        chrome.storage.sync.get("user",function (data) {
           // alert(data);
            console.log(data)
            console.log("\n"+data.user.username);
            var databaseUser_username = data.user.username;
            var databaseUser_password = data.user.password;
            if (databaseUser_username === username && databaseUser_password === password){
                alert("Congratulation USER LOGGED In");
            }
            else{
                alert("User is not register  or  Incorrect username or Password");
            }
        });
    }
    else{
        alert("Please fill the fields");
    }

  //  alert("pakistan "+username+ "-- "+password+">>>>>>>>>> "+JSON.stringify(userObj));


}
function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userObj = {
        "username": username,
        "password": password
    };
    var userObjString = JSON.stringify(userObj);

    if(username != "" && password != ""){
        chrome.storage.sync.set({"user": userObj},function () {
            console.log("WRITEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
          //  alert();
        });
        chrome.storage.sync.get("user",function (data) {
            alert("sucessfull sign up");
          //  alert(data);
            console.log(data)
            console.log("\n"+data.user.username);
        });

    }
    else{
        alert("Please fill the fields");
    }

    //alert("pakistan ");
};
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#signIn').addEventListener('click', signIn);
    document.querySelector('#signUp').addEventListener('click', signUp);
});
