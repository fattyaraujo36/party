
//var email2 = document.getElementById("emailInput2").value;
//var senha2= document.getElementById("passwordInput2").value;
const form= document.querySelector('#formAutenticacao2');
var cadastrar = document.getElementById("cadastrar");


form.addEventListener('submit', (e)=>{
	e.preventDefault();

	var email = form['emailInput2'].value;
	var password= form['passwordInput2'].value;


	
	auth.createUserWithEmailAndPassword(email , password).then(function(result){
	
		

	window.location.href = "loginofc.html";

})
.catch(function(error){
	alert("Verifique seus dados e tente novamente");

}) 
 });






  
