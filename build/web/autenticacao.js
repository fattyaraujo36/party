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
    alert("Bem vindo ao PartyLife");
})

  
.catch(function(error){
	alert("Você não está autenticado");

})
}
    else
    window.location.href = "admLocais.html";
 }
   



