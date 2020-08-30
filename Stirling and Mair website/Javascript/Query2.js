
$(document).ready(function () {



    var tblQueries = document.getElementById('tbl_queries');
    var databaseRef = firebase.database().ref('Query/');
    var rowIndex = 1;

    databaseRef.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {

            var childData = childSnapshot.val();

            var row = tblQueries.insertRow(rowIndex);
            var Name1 = row.insertCell(0);
            var email1 = row.insertCell(1);
            var Question1 = row.insertCell(2);


            Name1.appendChild(document.createTextNode(childData.Name));
            email1.appendChild(document.createTextNode(childData.email));
            Question1.appendChild(document.createTextNode(childData.Question));

            rowIndex = rowIndex + 1;

        });

    });
    $("#btnRemove").on('click', function() {
        var Name = $("#NameRemove").val();

        firebase.database().ref().child('/Query/' + Name).remove();
        alert('The Comment has been deleted!');
        window.location.reload();
    });
})




