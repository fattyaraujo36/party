document.getElementById("formPlaylist").addEventListener("submit", (e)=>{

  

  e.preventDefault();
  subirImagemAFirebase();
  formPlaylist.reset();
});

window.onload = inicializar;
   var downloadURL;
  var file;
  var storageRef;
  
  var d = new Date();
  var t = d.getTime();
  var counter = t;

  function inicializar(){
    file = document.getElementById("file");
  
    //file.addEventListener("change", subirImagemAFirebase, false);
  
    storageRef = firebase.storage().ref();
  
    imagensRef = firebase.database().ref().child("playlist");
  
    readTask();
    //mostrarImagensDeFirebase();
  
  }

  function subirImagemAFirebase(){

    var name = document.getElementById('nome').value;
    var cantorBanda = document.getElementById('cantorBanda').value;
   
  
      var imagemASubir = file.files[0];
      var imagem= imagemASubir.name; 
      var uploadTask =  storageRef.child('playlist/' +imagem).put(imagemASubir);
  
      uploadTask.on('state_changed',
       function(snapshot){
  
      }, function(error){
  
      }, function(){
          downloadURL = uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
          alert("subiu" + downloadURL);
  console.log(downloadURL);
  var imagem= imagemASubir.name; 
  criarL(name , imagem, cantorBanda, downloadURL);
  
  });
  
  
  }); }
  function criarL( name,imagem, cantorBanda, downloadURL){
    counter+=1;
    var task={
        id:counter,
        name:name,
        nome:imagem,
        cantorBanda:cantorBanda,
        url:downloadURL
     //   uid:uid,
        
    }
    
    let db = firebase.database().ref("playlist/"+counter);
    db.set(task);
    //userEvento();
  } ; /*
  function criarL(name ,nome  , cantorBanda , downloadURL){
    counter+=1;
    imagensRef.set({id:counter, name:name,nome:nome, cantorBanda:cantorBanda,  url:downloadURL});
  }



*/
  
  function readTask(){
    var task = firebase.database().ref('playlist/');
    task.on("child_added", function(data){
      var taskValue= data.val();
      console.log(taskValue);
    var card =  document.getElementById('tabelaPlaylist');
   card.innerHTML+=  ` <tr class = "ulLista">
   
   <td>${taskValue.name}</td>
   <td>${taskValue.cantorBanda}</td>
   <td> <audio controls>
   <source src="${taskValue.url}" type="audio/mpeg">
 </audio> </td>
   <td>    <button type="submit" class="btn btn-primary"  onclick = "updateTask(${taskValue.id}, '${taskValue.name}',' ${taskValue.cantorBanda}' )" > <i class="fas fa-edit mr-3 "></i> Editar
   </button> 
    <button class="btn btn-primary" onclick="readEventos();"  data-toggle="modal" data-target="#modalExemplo"><i class="fas fa-trash-alt mr-3 "> </i>Excluir</button> </td>
    
    <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header navInicio">
         
          <button type="button"  class="close" data-dismiss="modal" aria-label="Fechar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body navInicio">
          Tem certeza que deseja excluir esta música?
        </div>
        <div class="modal-footer navInicio"> 
          <div class="col-sm-11 mx-auto " id="cardE"> </div>
  
  
      </div> </div>
    </div>
  </div> 
    
 

</tr> 
</tbody>
</table>
  `
});

};   
  /*
function readEventos2(){
  var task= firebase.database().ref("eventos/");
  task.on("child_added", function(data){
      var taskValue = data.val();
      document.getElementById("cardCerimonialista").innerHTML+=`<div class="card text-center ca ">
   
      <div class="card-body ca ">
        <div class="align-center">
            <p class="card-text ct text-center">  <span class="mr-3" > Tipo: ${taskValue.tipo}    </span>    <span class="mr-3 ml-5" >     Data: ${taskValue.data}   </span>    <span  class="mr-3">   Data Alternativa: ${taskValue.dataA} </span> <span class="mr-3" >   Horário: ${taskValue.horario} </span > </p>
          
        <p class="card-text ct text-center"> <span >  Descrição: ${taskValue.descricao}  </p>
       

    <button  class="btn btn-primary" style="color:white"  onclick="enviarConvite()" > Enviar </button>
  </div>
</div> 
</div>  
`



  });

}

function enviarConvite(){

}


    */



function readEventos(){
var task= firebase.database().ref("playlist/");
task.on("child_added", function(data){
  var taskValue = data.val();
  document.getElementById("cardE").innerHTML=`    <div class="navInicio">
         <button type="button" class=" btn btn-outline-secondary " data-dismiss="modal" >Voltar</button>

        <button class="btn btn-primary " onclick="deleteTask(${taskValue.id}); " data-toggle="modal" data-target="#modalExemplo">Excluir</button>
      </div> <div>
`

console.log('hello');
}); }


function deleteTask(id){
console.log(id);
console.log(cantorBanda);
  var task = firebase.database().ref("playlist/" +id);
  task.remove();
 console.log(error);
 
 // reset();
//   document.getElementById("modalExemplo10").innerHTML='';
//   readConvidados();
//document.getElementById("tabelaPlaylist").innerHTML='';
readConvidados();
reset();


  
}

/*

function adicionados(){
window.location.href = "orcamento.html";
} 
*/
function reset(){
document.getElementById("first").innerHTML=`<form  id="formPlaylist">
<div class="row">
<div class="col-md-2 mb- mt-3 ">
  <label for="nome" class="lab ml-3 ">Nome </label>
  <input type="text" class="form-control inp"  id="nome">
</div>
<div class="col-md-2 mb-3 mt-3">
  <label for="cantorBanda" class="lab ml-3 ">Cantor/Banda</label>
  <input type="text" class="form-control inp" id="cantorBanda">
</div>
<div class="col-md-5 mb-3 mt-3">
<label for="genero" class="lab ml-3 ">Áudio</label>
  <input type="file" class="form-control inp" id="file">
</div>
<div class="col-md-2 mb-3 mt-5">
 <button class="btn btn-outline-secondary form-control" type="submit" > Adicionar</button>
</div>
</div> 
    </form>
</div>` 
;

document.getElementById("formPlaylist").addEventListener("submit", (e)=>{
var name= document.getElementById("nome").value;
var cantorBanda = document.getElementById("cantorBanda").value;



e.preventDefault();
createTask(name,cantorBanda);
formPlaylist.reset();
});

}


function updateTask(id,name,cantorBanda){
window.location.href='#ancora'; 
document.getElementById("first").innerHTML=`<form  id="formPlaylist2">
<div class="row mx-auto">
<div class="col-md-2 mb- mt-3 ml-5">
  <label for="nome" class="lab ml-3 ">Nome </label>
  <input type="text" class="form-control inp"  id="nome">
</div>
<div class="col-md-2 col-mb-3 mt-3">
  <label for="cantorBanda" class="lab ml-3 ">Cantor/Banda</label>
  <input type="text" class="form-control inp" id="cantorBanda">
</div>
<div class="col-md-4 col-mb-3 mt-3">
<label for="genero" class="lab ml-3 ">Áudio</label>
  <input type="file" class="form-control inp" id="file">
</div>
<div class="col-md-3 col-mb-3 mt-5">
 
<button   class="btn btn-outline-secondary mr-3 " id="atualizar"  > Atualizar </button>
<button   class="btn btn-outline-secondary "type="reset" id="cancelar" > Cancelar </button>
</div> </div> </div>
</form>
`;

document.getElementById("formPlaylist2").addEventListener ("submit", (e)=>{
  e.preventDefault();
  
   
});
document.getElementById("cancelar").addEventListener("click", (e) =>{
   reset(); 
});
document.getElementById("atualizar").addEventListener("click", (e) =>{
    updateTask2(id,document.getElementById("nome").value,document.getElementById("cantorBanda").value);
    
 });
  
 document.getElementById("nome").value=name;
 document.getElementById("cantorBanda").value=cantorBanda;


 console.log(error);

}

function updateTask2(id, name, cantorBanda){

  
  //file.addEventListener("change", subirImagemAFirebase, false);

  

  
 
console.log(id);
  
  var task2={
          id:id,
          name: name,
          cantorBanda:cantorBanda
  
      } 
      let db = firebase.database().ref("playlist/"+id);
      db.set(task2);
  
      document.getElementById("tabelaPlaylist").innerHTML='';
      readTask();
      reset();
      console.log(error);
  
      
    };

  