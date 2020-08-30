$(document).ready( function(){


    var modal = document.getElementById("myModal2");


    var btn = document.getElementById("openSignIn2");


    var span = document.getElementsByClassName("close")[0];


    $("#openSignIn2").on('click', function () {
        modal.style.display = "block";
    });


    $("#close").on('click', function () {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $("#btnLogin2").on('click', function () {
        var email = $("#txtEmail2").val();
        var password = $("#txtPassword2").val();
        admin1 = new Admin(email, password);
        admin1.logIn();
    });

    $("#btnSignup2").on('click', function(){
        const email = $("#txtEmail2").val();
        const password = $("#txtPassword2").val();
        account2 = new Admin(email,password);
        alert(account2.createAccount());

    });

    $("#btnLogout2").on('click', function() {
        account3 = new Admin();
        alert(account3.logOut());
    });

});

class Admin {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    logIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user != null) {
                alert(" Admin is signed in.");
                window.location = 'AdminQuery.html';
            }
        });
    }

    logOut(){
        firebase.auth().signOut().then(function () {
            window.location = 'index.html';
            return `Admin signed out`;
        }).catch(function (error) {
            alert(error);
        });

    }

    createAccount() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error){
            var errorMessage = error.message;
            alert(errorMessage);
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                alert(" Admin account created.");
                window.location = 'AdminQuery.html';
            }
        });
    }
}
