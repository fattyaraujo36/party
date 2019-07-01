var user;
var uid;
var auth = firebase.auth();
var db = firebase.firestore();
var email = document.getElementById("emailInput").value;
var senha2= document.getElementById("passwordInput").value;

window.onload = inicializar;
var formAutenticacao;


function inicializar(){
	formAutenticacao=document.getElementById("formAutenticacao");
	formAutenticacao.addEventListener("submit",autenticar,false);


}
function autenticar(event){
	event.preventDefault();
var usuario = event.target.emailInput.value;
var senha= event.target.passwordInput.value;

if(usuario!= "adm@gmail.com" && senha!="adm123"){

	
firebase.auth().signInWithEmailAndPassword(usuario,senha)

.then(function(result){
	

  window.location.href = "index.html";
})

  
.catch(function(error){
	alert("Você não está autenticado");

})
}
    else
    window.location.href = "admLocais.html";
 }
   


auth.onAuthStateChanged(function(user) {
	if(user){
	  uid = user.uid;
	  email = user.email; 
		console.log('uid ', uid);
  	console.log('user logged in ', user);
	  criarUsuario(uid, email);

	}
	else{
		console.log('user logout');
	}
});

function criarUsuario(uid,email) {
	//var userId = firebase.auth().currentUser.uid;
	firebase.database().ref('users/' + uid).set({
	  id: uid,
	 email : email
	 
	});

}