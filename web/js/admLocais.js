
document.getElementById("formLocais").addEventListener("submit", (e)=>{

  

  e.preventDefault();
  subirImagemAFirebase();
  formLocais.reset();
});


window.onload = inicializar;
var file;
var storageRef;

function inicializar(){
  file = document.getElementById("file");

  //file.addEventListener("change", subirImagemAFirebase, false);

  storageRef = firebase.storage().ref();

  imagensRef = firebase.database().ref().child("imagensLocais")

  readTaskL();
  //mostrarImagensDeFirebase();

}
/*
function mostrarImagensDeFirebase(){
imagensRef.on("value", function(snapshot){
    var dados = snapshot.val();
    var result = "";
    for(var key in dados){
        result +=' <img src = "' +dados[key].url+ '" />';
    }
    document.getElementById("main").innerHTML=result;
})
}

*/
function subirImagemAFirebase(){

  var nomeL = document.getElementById("nomeL").value;
  var bairroL = document.getElementById("bairroL").value;
  var ruaL = document.getElementById("ruaL").value;
  var numL = document.getElementById("numL").value;
  var emailL = document.getElementById("emailL").value;
  var contatoL = document.getElementById("contatoL").value;
  var precoL = document.getElementById("precoL").value;
  var descricaoL = document.getElementById("descricaoL").value;

    var imagemASubir = file.files[0];
    var uploadTask =  storageRef.child('imagensLocais/' +imagemASubir.name).put(imagemASubir);

    uploadTask.on('state_changed',
     function(snapshot){

    }, function(error){

    }, function(){
        var downloadURL = uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
     //   alert("subiu" + downloadURL);
//console.log(downloadURL); 
criarL(nomeL , imagemASubir.name, bairroL, ruaL, numL, emailL, contatoL, precoL, descricaoL , downloadURL);

});


}); }
function criarL(nomeL , nome,  bairroL, ruaL, numL, emailL, contatoL, precoL, descricaoL , downloadURL){
  var d = new Date();
  var t = d.getTime();
  var counter = t;
    counter+=1;

    var task={
    id:counter,
    nomeL:nomeL,
    nome:nome, 
    bairroL:bairroL,
    ruaL: ruaL,
    numL:numL,
    emailL:emailL, 
    contatoL:contatoL,
    precoL:precoL, 
    descricaoL:descricaoL,
    url:downloadURL}
    let db = firebase.database().ref("imagensLocais/"+counter);
db.set(task);
  console.log(tipo);
};
;



function readTaskL(){
  var taskL = firebase.database().ref('imagensLocais/');
  taskL.on("child_added", function(data){
    var taskValueL= data.val();
    console.log(taskValueL);
  var cardL =  document.getElementById('locais');
 cardL.innerHTML+=`

 
  
   <div class="row mx-auto">
   <div class="col-sm-8 ca mx-auto mt-3">
    <div class="card text-center ca">
    <img src= "${taskValueL.url}"class="img-responsive imgcard mx-auto md-block mt-3" alt="...">

<div class="card-body">
      <h5  style="color: white" class="card-title h">Nome: ${taskValueL.nomeL}</h5>
      <div class="mx-auto">
        <p class="card-text ct text-center ">Bairro: ${taskValueL.bairroL}, Rua: ${taskValueL.ruaL}, Número: ${taskValueL.numL}, Email: ${taskValueL.emailL}, Contato: ${taskValueL.contatoL} </p>
        <p class="card-text ct text-center ">Descrição: ${taskValueL.descricaoL}</p>
      <div class="card-footer">
          <p style="color: #daa520;"> Preço: ${taskValueL.precoL} </p>
    <a href="#" class="btn  btn-primary">Excluir</a>
<a href="#" class="btn btn-primary">Editar</a>
    </div>
 </div> </div> </div> </div>
      
    
    `
  //mostrarImagensDeFirebase();
  });
} 





 /*
function getData(){
  var nameL = document.getElementById('nameLocaiss').value;
firebase.database().ref('admLocais/'+nameLocais).once('value').then(function(snapshot){
  var nameL = snapshot.val().adm
  var bairroL = document.getElementById('bairroLocais').value;
  var ruaL = document.getElementById('ruaLocais').value;
  var numL = document.getElementById('numLocais').value;
  var emailL = document.getElementById('emailLocais').value;
  var precoL = document.getElementById('precoLocais').value;
  var descricaoL = document.getElementById('emailLocais').value;
})
} */

//let bildeurler = firebase.database().ref("imgLocais");

/*

function upload(){



  var file = document.getElementById("file").files[0];

  var fileName = file.name;

var storageRef= firebase.storage().ref('imagens/' +fileName);


var uploadTask = storageRef.put(file);

uploadTask.on('state_changed', function (snapshot){

  var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  console.log("upload is" +progress+ "done");
}, function(error){
  console.log(error.message);
}, function(){
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
  console.log(downloadURL); 

  });


}); };*/ /*
};  
let database = firebase.database();
let storage = firebase.storage();

let inpBilde = document.getElementById("inpBilde");
let main = document.getElementById("main");

let bildeurler = database.ref("bildeurler");

function lastOppBilde(){
let bilde = this.files[0];
let bildenavn = storage.ref("minefinebilder/" +new Date());
    bildenavn.put(bilde);
}
inpBilde.onchange = lastOppBilde; */

