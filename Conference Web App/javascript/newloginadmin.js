$(document).ready( function(){

    // Get the modal
    var modal = document.getElementById("myModal2");

    // Get the button that opens the modal
    var btn = document.getElementById("openSignIn2");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    $("#openSignIn2").on('click', function () {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    $("#close").on('click', function () {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
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
            if (user) {
                alert(" Admin is signed in.");
                window.location = 'AdminPage.html';
            }
        });
    }

    logOut(){
        firebase.auth().signOut().then(function () {
        }, function (error) {
            alert(error);
        });
        window.location = 'index.html';
        return `Admin signed out`;
    }

    createAccount() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error){
            var errorMessage = error.message;
            alert(errorMessage);
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                alert(" Admin account created.");
                window.location = 'AdminPage.html';
            }
        });
    }
}