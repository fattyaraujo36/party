  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the datvar database = firebase.database();

var nome= document.getElementById('nome');
var email = document.getElementById('email');
var botao = document.getElementById('botao');

botao.addEventListener('click', function(){
	create(nome.value,email.value);

});
  


function create(nome,email){
   var data={
   	nome: nome,
   	email: email
   };
   return firebase.database().ref().child('lista').push(data);
}

