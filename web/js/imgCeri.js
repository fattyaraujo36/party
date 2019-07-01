document.getElementById("formCerimonialista").addEventListener("submit", (e)=>{

  

  e.preventDefault();
  subirImagemAFirebase();
  formCerimonialista.reset();
});



window.onload = inicializar;
var file;
var storageRef;

function inicializar(){
  file = document.getElementById("file");
  //file.addEventListener("change", subirImagemAFirebase, false);

  storageRef = firebase.storage().ref();

  imagensRef = firebase.database().ref().child("imagensCeri")

 // mostrarImagensDeFirebase();
 readTask();
}

function readTask(){
    var task = firebase.database().ref('imagensCeri/');
    task.on("child_added", function(data){
      var taskValue= data.val();
      console.log(taskValue);
    var card =  document.getElementById('ceri');
   card.innerHTML+=`

   
    
     <div class="row mx-auto">
     <div class="col-sm-8 ca mx-auto mt-3">
      <div class="card text-center ca">
      <img src= "${taskValue.url}"class="imgcard mx-auto md-block mt-3" alt="...">

  <div class="card-body">
        <h5  style="color: white;" class="card-title h">Nome: ${taskValue.nomeofc}</h5>
        <div class="align-center">
          <p class="card-text ct text-center">Email: ${taskValue.emailCeri}, Contato: ${taskValue.contatoCeri} </p>
  
          <p class="card-text ct text-center">Descrição: ${taskValue.descricaoCeri} </p>
        <div class="card-footer">
            <p style="color: #daa520;"> Preço: ${taskValue.precoCeri} </p>
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


function subirImagemAFirebase(){

    var nomeofc = document.getElementById("nome").value;
    var emailCeri = document.getElementById("emailCeri").value;
    var precoCeri = document.getElementById("precoCeri").value;
    var contatoCeri = document.getElementById("contatoCeri").value;
    var descricaoCeri = document.getElementById("descricaoCeri").value;


    var imagemASubir = file.files[0];
    var uploadTask =  storageRef.child('imagensCeri/' +imagemASubir.name).put(imagemASubir);

    uploadTask.on('state_changed',
     function(snapshot){

    }, function(error){

    }, function(){
        var downloadURL = uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
        //alert("subiu" + downloadURL);
console.log(downloadURL); 
criarFirebase(nomeofc , imagemASubir.name, emailCeri, precoCeri, contatoCeri, descricaoCeri,  downloadURL);
});


}); }

function criarFirebase(nomeofc, nome, emailCeri,  precoCeri, contatoCeri, descricaoCeri, downloadURL){
  var d = new Date();
  var t = d.getTime();
  var counter = t;
    counter+=1;

    var task={
      id: counter,
      nomeofc:nomeofc, 
      nome:nome, 
       emailCeri: emailCeri,
        precoCeri: precoCeri, 
        contatoCeri: contatoCeri, 
        descricaoCeri: descricaoCeri,
         url:downloadURL}

         let db = firebase.database().ref("imagensCeri/"+counter);
db.set(task);
}
