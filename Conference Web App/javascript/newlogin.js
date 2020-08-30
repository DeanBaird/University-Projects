$(document).ready( function(){

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openSignIn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    $("#openSignIn").on('click', function () {
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

    $("#btnLogin").on('click', function(){
        const email = $("#txtEmail").val();
        const password = $("#txtPassword").val();
        account1 = new Account(email, password);
        account1.logIn();
    });

    $("#btnSignup").on('click', function(){
        const email = $("#txtEmail").val();
        const password = $("#txtPassword").val();
        account2 = new Account(email,password);
        alert(account2.createAccount());

    });

    $("#btnLogout").on('click', function() {
        account3 = new Account();
        alert(account3.logOut());
    });

});

class Account {

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
                alert(" User is signed in.");
                window.location = 'Discussion.html';
            }
        });
    }

    logOut(){
        firebase.auth().signOut().then(function () {
        }, function (error) {
            alert(error);
        });
        window.location = 'index.html';
        return `User signed out`;
    }

    createAccount() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error){
            var errorMessage = error.message;
            alert(errorMessage);
        });

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                alert(" User successfully signed up.");
                window.location = 'Discussion.html';
            }
        });
    }
}