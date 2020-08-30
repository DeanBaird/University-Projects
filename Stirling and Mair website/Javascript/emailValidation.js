function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        $result.text(email + " is valid, you will be sent an email with a response to your Query as soon as possible.");
        $result.css("color", "green");
        $("#validate").on("click", sendQuery,);

    } else {
        $result.text(email + " is not a valid email, please try again.");
        $result.css("color", "red");
        
    }
    return false;
}

$("#validate").on("click", validate,);

function sendQuery() {

    var Name = $("#Name").val();
    var email = $("#email").val();
    var Question = $("#Question").val();


    var data = {
        Name: Name,
        email: email,
        Question: Question,

    }

    var updates = {};
    updates['/Query/' + Name] = data;

    firebase.database().ref().update(updates);



}

