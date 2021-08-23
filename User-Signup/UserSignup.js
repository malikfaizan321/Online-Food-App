function userSignUp() { // <------------------on user sign up data will be saved at firbase users collection node tree by getting r1 ---------------->
    // get input values
    var userName = document.getElementById("userName")
    var userEmail = document.getElementById("userEmail");
    var userPhone = document.getElementById("userPhone")
    var userCountry = document.getElementById("userCountry")
    var userCity = document.getElementById("userCity")
    var userPassword = document.getElementById("userPassword")



    var user = {
        userName: userName.value,
        userEmail: userEmail.value,
        userPhone: userPhone.value,
        userCountry: userCountry.value,
        userCity: userCity.value,
        userPassword: userPassword.value
    }
    if (user.userName == "") {

    } else if (user.userEmail == "") {

    } else if (user.userPhone == "") {

    } else if (user.userCountry == "") {

    } else if (user.userCity == "") {

    } else if (user.userPassword == "") {

    } else {

        firebase.auth().createUserWithEmailAnduserPassword(userEmail.value, userPassword.value)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // console.log(user)
                message.innerHTML = "Signup Successfull "
                setTimeout(() => {
                    message.innerHTML = "";

                }, 3000);

                var user = {
                        userName: userName.value,
                        userEmail: userEmail.value,
                        userPassword: userPassword.value

                    }
                    //database "c" create or add or insert an object in db
                firebase.database().ref(`users/${userCredential.user.uid}`).set(user)
                    .then(() => {
                        window.location = "login.html"
                    })


                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                message.innerHTML = errorMessage
                setTimeout(() => {
                    message.innerHTML = "";

                }, 2000);
            });
    }
}