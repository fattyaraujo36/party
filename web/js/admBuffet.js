document.getElementById("formBuffet").addEventListener("submit", (e)=>{

  

  e.preventDefault();
  subirImagemAFirebase2();
  formBuffet.reset();
});

window.onload = inicializar2;
var file2;
var storageRef2;





function inicializar2(){
  file2 = document.getElementById("file2");
  //file.addEventListener("change", subirImagemAFirebase, false);

  storageRef2 = firebase.storage().ref();

  imagensRef2 = firebase.database().ref().child("imagensBuffet")

 // mostrarImagensDeFirebase();
 readTask2();
 
}

function readTask2(){
    var task2 = firebase.database().ref('imagensBuffet/');
    task2.on("child_added", function(data){
      var taskValue2= data.val();
      console.log(taskValue2);
    var card2 =  document.getElementById('buffet');
   card2.innerHTML+=`

   
    
     <div class="row mx-auto">
     <div class="col-sm-8 ca mx-auto mt-3">
      <div class="card text-center ca">
      <img src= "${taskValue2.url}"class="imgcard mx-auto md-block mt-3" alt="...">

  <div class="card-body">
        <h5 class="card-title h" style="color: white">Tipo: ${taskValue2.tipo2}</h5>
        <div class="mx-auto">
          <p class="card-text ct text-center ">Nome: ${taskValue2.nomeofc2}, Quantidade: ${taskValue2.qtd} </p>
  
        <div class="card-footer">
            <p style="color: #daa520;"> Preço: ${taskValue2.preco2} </p>
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


function subirImagemAFirebase2(){

    var nomeofc2 = document.getElementById("nomeofc2").value;
    var tipo2 = document.getElementById("tipo2").value;
    var qtd = document.getElementById("qtd").value;
    var preco2 = document.getElementById("preco2").value;


    var imagemASubir2 = file2.files[0];
    var uploadTask2 =  storageRef2.child('imagensBuffet/' +imagemASubir2.name).put(imagemASubir2);

    uploadTask2.on('state_changed',
     function(snapshot){

    }, function(error){

    }, function(){
        var downloadURL2 = uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL2){
       // alert("subiu" + downloadURL2);
console.log(downloadURL2); 
criarFirebase2(nomeofc2 , imagemASubir2.name, tipo2, qtd, preco2, downloadURL2);
});


}); formBuffet.reset(); }

function criarFirebase2(nomeofc2 , nome, tipo2, qtd, preco2, downloadURL2){
  var d = new Date();
  var t = d.getTime();
  var counter = t;
    counter+=1;

    var task={
     id:counter, 
     nomeofc2:nomeofc2, 
     nome:nome,
     tipo2:tipo2,
     qtd:qtd,
     preco2:preco2,
     url:downloadURL2}

   

let db = firebase.database().ref("imagensBuffet/"+counter);
db.set(task);
  console.log(tipo);
};
