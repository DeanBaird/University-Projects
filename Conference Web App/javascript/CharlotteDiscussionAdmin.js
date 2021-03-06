
var tblUsers = document.getElementById('tbl_discussion');
var databaseRef = firebase.database().ref('CharlotteDiscussion/');
var rowIndex = 1;

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

        var childData = childSnapshot.val();

        var row = tblUsers.insertRow(rowIndex);
        var cellName= row.insertCell(0);
        var cellComment = row.insertCell(1);

        cellName.appendChild(document.createTextNode(childData.Name));
        cellComment.appendChild(document.createTextNode(childData.Comment));


        rowIndex = rowIndex + 1;

    });

    $("#btnRemoveComment").on('click', function() {
        var Name = $("#txtName").val();

        Discussion = new createDiscussion(Name);
        Discussion.RemoveComment();
    });


    class createDiscussion{
        constructor(Name){
            this.Name = Name;
        }

        RemoveComment(){
            var Name = document.getElementById('Name').value;

            firebase.database().ref().child('/CharlotteDiscussion/' + Name).remove();
            alert('The Comment has been deleted!');
            reload_page();
        }

    }
    function reload_page(){
        window.location.reload();
    }

});