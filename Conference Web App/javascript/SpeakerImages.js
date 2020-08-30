var storage = firebase.storage();

var SharonReference = storage.ref('KeySpeakers/SharonSteed.jpg');
var AminaReference = storage.ref('KeySpeakers/AminaAdewusi.jpg');
var AliceReference = storage.ref('KeySpeakers/AliceBartlett.jpg');
var LauraReference = storage.ref('KeySpeakers/LauraKalbag.jpg');
var HarryReference = storage.ref('KeySpeakers/HarryRoberts.jpg');
var AnnaReference = storage.ref('KeySpeakers/AnnaMigas.jpg');
var CharlotteReference = storage.ref('KeySpeakers/CharlotteDann.png');
var SuzReference = storage.ref('KeySpeakers/SuzHinton.jpg');

SharonReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Sharon');
    img.src = url;
}).catch(function (error) {
});

AminaReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Amina');
    img.src = url;
}).catch(function (error) {
});

AliceReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Alice');
    img.src = url;
}).catch(function (error) {
});

LauraReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Laura');
    img.src = url;
}).catch(function (error) {
});

HarryReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Harry');
    img.src = url;
}).catch(function (error) {
});

AnnaReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Anna');
    img.src = url;
}).catch(function (error) {
});

CharlotteReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Charlotte');
    img.src = url;
}).catch(function (error) {
});

SuzReference.getDownloadURL().then(function (url) {
    var img = document.getElementById('Suz');
    img.src = url;
}).catch(function (error) {
});