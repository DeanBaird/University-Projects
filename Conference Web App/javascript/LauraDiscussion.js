
var tblUsers = document.getElementById('tbl_discussion');
var databaseRef = firebase.database().ref('LauraDiscussion/');
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


    $("#btnAddComment").on('click', function() {
        var Name = $("#txtName").val();
        var Comment = $("#txtComment").val();
        Discussion = new createDiscussion(Name, Comment);
        Discussion.AddComment();
    });

    $("#btnRemoveComment").on('click', function() {
        var Name = $("#txtName").val();
        var Comment = $("#txtComment").val();

        Discussion = new createDiscussion(Name, Comment);
        Discussion.RemoveComment();
    });


    class createDiscussion{
        constructor(Name, Comment,){
            this.Name = Name;
            this.Comment = Comment;

        }

        AddComment(){
            var Comment = document.getElementById('Comment').value;
            var Name = document.getElementById('Name').value;

            var data = {
                Name: Name,
                Comment: Comment,

            }

            var updates = {};
            updates['/LauraDiscussion/' + Name] = data;
            firebase.database().ref().update(updates);

            alert('Comment added to Discussion!');
            reload_page();
        }

        RemoveComment(){
            var Comment = document.getElementById('Comment').value;
            var Name = document.getElementById('Name').value;

            firebase.database().ref().child('/LauraDiscussion/' + Name).remove();
            alert('The Comment has been deleted!');
            reload_page();
        }

    }
    function reload_page(){
        window.location.reload();
    }

});