const form= document.querySelector('#formAutenticacao2');

form.addEventListener('submit', (e)=>{
	e.preventDefault();


const email= form['emailInput2'].value;
const password = form['passwordInput2'].value;

	
	auth.createUserWithEmailAndPassword(email , password).then(function(result){
	alert("Bem vindo ao PartyLife");
	window.location.href = "index.html";
})
.catch(function(error){
	alert("Verifique seus dados e tente novamente");

})
})

	
