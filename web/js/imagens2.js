$(document).ready(function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var token =   firebase.auth().currentUser.uid;
          queryDatabase(token);
        } else {
          window.location = "index.html";
        }
    });
      });

      function queryDatabase(token){
       firebase.database().ref('/Posts/').once('value').then(function(snapshot){
           var PostObject = snapshot.val();
           var keys = Object.keys(PostObject);
           var currentRow;  
           for (var i=0; i< keys.length; i++){

           var currentObject= PostObject[keys[i]];
                 if (i%3 ==0){
               currentRow = document.createElement("div");
               $(currentRow).addClass("row");
               $("#ceri").append(currentRow);

                 }
                 var col = document.createElement("div");
                 $(col). addClass("col-lg-4")
                 var image = document.createElement("img");
                 image.src = currentObject.url;
                 $(image).addClass("contentImage");
                 var p = document.createElement("p");
                 $(p).html(currentObject.caption);
                 $(p).addClass("contentCaption");
                 $(col).append(image);
                 $(col).append(p);
                 $(currentRow).append(col);
                }
        
       });
      }

var provider = new firebase.auth.GoogleAuthProvider();
var user;
var selectedFile;



$("#file").on ("change", function (event){
    selectedFile= event.target.files[0];
    $("#uploadButton").show();
});

      function uploadFile(){
          var filename = selectedFile.name;
          var StorageRef = firebase.storage().ref('/img/' +filename);
          var uploadTask = storageRef.put(selectedFile);
uploadTask.on('state_changed',
function(snapshot){

}, function(error){

}, function(){

        var postKey = firebase.database().ref('Posts/').push().key;
        var downloadURL = uploadTask.snapshot.downloadURL;
        var updates ={};
        var postData = {
            url: downloadURL,
            caption: $("#imageCaption").val(),
            user: user.uid

        };

        updates['/Posts/' +postKey] = postData;
        firebase.database().ref().update(updates);


        
    }); }