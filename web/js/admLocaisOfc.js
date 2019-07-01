window.onload = inicializarL;
var fileL;
var storageRefL;

function inicializarL(){
  fileL = document.getElementById("fileL");
  fileL.addEventListener("change", INS, false);

  storageRefL = firebase.storage().ref();

  imagensRefL = firebase.database().ref().child("imagensL")

 // mostrarImagensDeFirebase();
 readTaskL();
}

function readTaskL(){
    var taskL = firebase.database().ref('imagensL/');
    taskL.on("child_added", function(data){
      var taskValueL= data.val();
      console.log(taskValueL);
    var cardL =  document.getElementById('locais');
   cardL.innerHTML+=`

   
    
     <div class="row mx-auto">
     <div class="col-sm-8 ca mx-auto mt-3">
      <div class="card text-center ca">
      <img src= "${taskValueL.urlL}"class="imgcard mx-auto md-block mt-3" alt="...">

  <div class="card-body">
        <h5 class="card-title h">Nome: ${taskValueL.nomeL}</h5>
        <div class="mx-auto">
          <p class="card-text ct text-justify ">Bairro: ${taskValueL.bairroL}, Rua: ${taskValueL.ruaL}, Número: ${taskValueL.numL}, Email: ${taskValueL.emailL}, ContatoL: ${taskValueL.contatoL} </p>
          <p class="card-text ct text-justify ">Descrição: ${taskValueL.descricaoL}</p>
        <div class="card-footer">
            <p> Preço: ${taskValueL.precoL} </p>
      <a href="#" class="btn  btn-primary">Excluir</a>
  <a href="#" class="btn btn-primary">Editar</a>
      </div>
   </div> </div> </div> </div>
        
      
      `
    //mostrarImagensDeFirebase();
    });
  } 
  

function mostrarImagensDeFirebase(){
imagensRef.on("value", function(snapshot){
    var dados = snapshot.val();
    var result = "";
    for(var key in dados){
        result +=' <img src = "' +dados[key].url+ '" />';
    }
    document.getElementById("ceri").innerHTML=result;
})
}


function inserirLocais(){

    var nomeL = document.getElementById("nomeL").value;
    var bairroL = document.getElementById("bairroL").value;
    var ruaL = document.getElementById("ruaL").value;
    var emailL = document.getElementById("emailL").value;
    var contatoL = document.getElementById("contatoL").value;
    var precoL = document.getElementById("precoL").value;
    var descricaoL = document.getElementById("descricaoL").value;






    var imagemL = fileL.files[0];
    var uploadTaskL =  storageRefL.child('imagensL/' +imagemL.name).put(imagemL);

    uploadTaskL.on('state_changed',
     function(snapshot){

    }, function(error){

    }, function(){
        var downloadURLL = uploadTaskL.snapshot.ref.getDownloadURL().then(function(downloadURLL){
        alert("subiu" + downloadURLL);
console.log(downloadURLL); 
criarL(nomeL , imagemL.name, bairroL, ruaL, numL, emailL, contatoL, precoL, descricaoL , downloadURLL);
});


}); }

function criarL(nomeL , nome,  bairroL, ruaL, numL, emailL, contatoL, precoL, descricaoL , downloadURLL){
    imagensRef2.push({nomeL:nomeL, nome:nome, bairroL:bairroL, ruaL: ruaL, numL:numL, emailL:emailL, contatoL:contatoL, precoL:precoL, descricaoL:descricaoL, urlL:downloadURLL});
}
