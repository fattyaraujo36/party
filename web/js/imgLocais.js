window.onload = inicializar3;
var file3;
var storageRef3;

function inicializar3(){
  file3 = document.getElementById("file3");
  //file.addEventListener("change", subirImagemAFirebase, false);
  //var salvar = document.getElementById("salvar");

  //salvar.addEventListener("click", subirImagemAFirebase);
  storageRef3 = firebase.storage().ref();

  imagensRef3 = firebase.database().ref().child("locaisDisponiveis");

 // mostrarImagensDeFirebase();
 readTask3();
}

function readTask3(){
    var task3 = firebase.database().ref('locaisDisponiveis/');
    task3.on("child_added", function(data){
      var taskValue3= data.val();
      console.log(taskValue3);
    var card3 =  document.getElementById('locaisDisponiveis');
   card3.innerHTML+=`

   
    
     <div class="row mx-auto">
     <div class="col-sm-8 ca mx-auto mt-3">
      <div class="card text-center ca">
      <img src= "${taskValue3.url}"class="imgcard mx-auto md-block mt-3" alt="...">

  <div class="card-body">
        <h5 class="card-title h">Nome: ${taskValue3.nomeofc}</h5>
        <div class="align-center">
          <p class="card-text ct text-justify">Bairro: ${taskValue3.bairroLocais}, Rua: ${taskValue3.ruaLocais}, Número:${taskValue3.numLocais}, Email: ${taskValue3.emailLocais}, Contato:${taskValue3.contatoLocais} </p>
  
          <p class="card-text ct text-justify">Descrição: ${taskValue3.descricaoLocais} </p>
        <div class="card-footer">
            <p> Preço: ${taskValue3.precoLocais} </p>
      <a href="#" class="btn  btn-primary">Excluir</a>
  <a href="#" class="btn btn-primary">Editar</a>
      </div>
   </div> </div> </div> </div>
        
      
      `
    //mostrarImagensDeFirebase();
    });
  } 
  

function mostrarImagensDeFirebase(){
imagensRef3.on("value", function(snapshot){
    var dados = snapshot.val();
    var result = "";
    for(var key in dados){
        result +=' <img src = "' +dados[key].url+ '" />';
    }
    document.getElementById("locais").innerHTML=result;
})
}


function subirImagemAFirebase3(){

    var nomeofc3 = document.getElementById("nomeofc").value;
    var bairroLocais = document.getElementById("bairroLocais").value;
    var ruaLocais = document.getElementById("ruaLocais").value;
    var numLocais = document.getElementById("numLocais").value;
    var emailLocais = document.getElementById("emailLocais").value;
    var contatoLocais = document.getElementById("contatoLocais").value;
    var precoLocais = document.getElementById("precoLocais").value;
    var descricaoLocais = document.getElementById("descricaoLocais").value;


    var imagemASubir3 = file3.files[0];
    var uploadTask3 =  storageRef3.child('imagensLocais/' +imagemASubir3.name).put(imagemASubir3);

    uploadTask3.on('state_changed',
     function(snapshot){

    }, function(error){
      console.log(error);

    }, function(){
        var downloadURL3 = uploadTask3.snapshot.ref.getDownloadURL().then(function(downloadURL3){
        alert("subiu" + downloadURL3);
console.log(downloadURL3); 
criarFirebase3(nomeofc3 , imagemASubir3.name,  bairroLocais , ruaLocais,  numLocais, emailLocais, contatoLocais,precoLocais, descricaoLocais,  downloadURL3);
});


}); }

function criarFirebase3(nomeofc3, nome,  bairroLocais , ruaLocais,  numLocais, emailLocais, contatoLocais,  precoLocais,  descricaoLocais, downloadURL3){
    imagensRef3.push({nomeofc3:nomeofc3, nome:nome,  bairroLocais:bairroLocais, ruaLocais:ruaLocais,  numLocais: numLocais, emailLocais: emailLocais,  contatoLocais:contatoLocais, precoLocais: precoLocais, descricaoLocais: descricaoLocais, url:downloadURL3});
}
