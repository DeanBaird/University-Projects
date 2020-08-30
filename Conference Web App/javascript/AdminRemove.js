$(document).ready( function() {

    $("#btnRemoveComment").on('click', function () {
        keySpeaker = $("#option").val();
        if (keySpeaker === "Alice") {
            window.location = 'AliceDiscussionAdmin.html';
        }else if(keySpeaker === "Amina"){
            window.location = 'AminaDiscussionAdmin.html';
        }else if(keySpeaker === "Anna"){
            window.location = 'AnnaDiscussionAdmin.html';
        }else if(keySpeaker === "Charlotte"){
            window.location = 'CharlotteDiscussionAdmin.html';
        }else if(keySpeaker === "Harry"){
            window.location = 'HarryDiscussionAdmin.html';
        }else if(keySpeaker === "Laura"){
            window.location = 'LauraDiscussionAdmin.html';
        }else if(keySpeaker === "Sharon"){
            window.location = 'SharonDiscussionAdmin.html';
        }else if(keySpeaker === "Suz"){
            window.location = 'SuzDiscussionAdmin.html';
        }
    });

});
