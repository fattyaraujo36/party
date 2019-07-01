
var auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
	if(user){ 
		console.log(user);
        
	}

	else{
		 window.location.href = "home.html";
	}


});



function sair (){
	auth.signOut().then(function() {
  // Sign-out successful.
   window.location.href = "home.html";
}).catch(function(error) {
  // An error happened.
});
			

}