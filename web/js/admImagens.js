window.onload = inicializar;
var file;
var storageRef;

function inicializar(){
  file = document.getElementById("file");
  file.addEventListener("change", subirImagemAFirebase, false);

  storageRef = firebase.storage().ref();

  imagensRef = firebase.database().ref().child("imagensL")

  mostrarImagensDeFirebase();
}

function mostrarImagensDeFirebase(){
imagensRef.on("value", function(snapshot){
    var dados = snapshot.val();
    var result = "";
    for(var key in dados){
        result +=' <img src = "' +dados[key].url+ '" />';
    }
    document.getElementById("imagem").innerHTML=result;
})
}


function subirImagemAFirebase(){
    var imagemASubir = file.files[0];
    var uploadTask =  storageRef.child('imagens/' +imagemASubir.name).put(imagemASubir);

    uploadTask.on('state_changed',
     function(snapshot){

    }, function(error){

    }, function(){
        var downloadURL = uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
        alert("subiu" + downloadURL);
console.log(downloadURL); 
criarFirebase(imagemASubir.name, downloadURL);
});


}); }

function criarFirebase(nome, downloadURL){
    imagensRef.push({nome:nome, url:downloadURL});
}
