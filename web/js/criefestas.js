
var user;
var email;
var uid;


var auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
	if(user){ 
		console.log(user);
    uid=user.uid;    
	}

	else{
		 window.location.href = "home.html";
	}


});








var d = new Date();
var t = d.getTime();
var counter = t;

document.getElementById("formEvento").addEventListener("submit", (e)=>{
    var tipo = document.getElementById("Tevento").value;
    var data = document.getElementById("data").value;
    var dataA = document.getElementById("dataAlternativa").value;
    var horario = document.getElementById("horario").value;
    var descricao = document.getElementById("descricaoEvento").value;
    e.preventDefault();
    createTask(tipo, data, dataA, horario,descricao);
    formEvento.reset();
});

function createTask(  tipo, data, dataA, horario, descricao){
counter+=1;
var task={
    id:counter,
 //   uid:uid,
    tipo: tipo,
    data:data,
    dataA:dataA,
    horario:horario,
    descricao: descricao
}

let db = firebase.database().ref("eventos/"+counter);
db.set(task);
document.getElementById("cardEvento").innerHTML='';
readTask();
//userEvento();
}

/*

function userEvento(){
  var task={
    id:uid,
    idEvento:counter,
    email:email,
    uid:uid,
    tipo: tipo,
    data:data,
    dataA:dataA,
    horario:horario,
    descricao: descricao
}

let db = firebase.database().ref("userEvento/"+uid);
db.set(task);
} */

function readTask(){
    var task= firebase.database().ref("eventos/");
    task.on("child_added", function(data){
        var taskValue = data.val();
        document.getElementById("cardEvento").innerHTML+=`<div class="card text-center ca">
     
        <div class="card-body ca mb-3">
          <div class="align-center">
              <p class="card-text ct text-center">  <span class="mr-5" > Tipo: ${taskValue.tipo}    </span>    <span class="mr-5" >     Data: ${taskValue.data}   </span>    <span  class="mr-5">   Data Alternativa: ${taskValue.dataA} </span> <span class="mr-5" >   Horário: ${taskValue.horario} </span > </p>
            
          <p class="card-text ct text-center"> <span >  Descrição: ${taskValue.descricao}  </p>
         

      <button type="submit" class="btn btn-primary" onclick="updateTask(${taskValue.id}, '${taskValue.tipo}',' ${taskValue.data}' , '${taskValue.dataA} ', '${taskValue.horario}', '${taskValue.descricao}')" >Editar</button>
      <button type="submit" class="btn btn-primary" onclick = "readEventos();" data-toggle="modal" data-target="#modalExemplo">Excluir</button>
      <button class="btn btn-outline-secondary ml-5"  style="color:white"  onclick="adicionados()" > Serviços Solicitados </button>

    </div>
  </div> 
  </div>  <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header navInicio">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body navInicio">
        Tem certeza que deseja excluir este Evento?
      </div>
      <div class="modal-footer navInicio"> 
        <div class="col-sm-11 mx-auto " id="cardE"> </div>


    </div> </div>
  </div>
</div> ` 
    });

  

};




function readEventos(){
  var task= firebase.database().ref("eventos/");
  task.on("child_added", function(data){
      var taskValue = data.val();
      document.getElementById("cardE").innerHTML=`    <div class="navInicio">
             <button type="button" class=" btn btn-outline-secondary " data-dismiss="modal" >Voltar</button>

            <button type="submit" class="btn btn-primary "  onclick="deleteTask(${taskValue.id})" data-dismiss="modal" >Excluir</button>
          </div> <div>
`
  }); }
 /*
function adicionados(){
  window.location.href = "orcamento.html";
} */

function reset(){
    document.getElementById("first").innerHTML=`<form id="formEvento" > <div class=" container4">
    <div class="row " >
      <div class="form-group col-md-4 ml-5 mb-3 mt-3">
        
       <label   for="evento" class="lab ml-3 " >Tipo do evento</label> 
                    <select id="Tevento" class="form-control inp">
                            <option class= "inp"disabled selected>Selecione uma opção...</option>
                            <option value="aniversario">Aniversário</option>
                            <option value="casamento">Casamento</option>
                            <option value="confraternizacao">Confraternização</option>
                    </select>
      </div>
      <div class="col-md-2 col-mb-2 mt-3 ">
        
        <label for="Cantor" class="lab ml-3 ">Data</label> 
   <input  type="text" class="form-control inp" id="data"> </div>
    
      <div class="col-md-2 col-mb-2 mt-3">
    <label for="data" class="lab ml-3 "> Data Alternativa</label> 
          <input  type="text" class="form-control inp" id="dataAlternativa"> </div>
            
             <div class="col-md-2 col-mb-2 mt-3">
          <label  for="horario" class="lab ml-3 ">Horário</label> 
          <input  type="time" class="form-control inp" id="horario"> </div>
          </div>
  </div>
   
      
  <div class="row">
    
  <div class="form-group col-md-4 ml-5 ">
      <label for="form-group" class="lab ml-3">Descrição</label>
      <textarea class="form-control text" id="descricaoEvento" rows="3"></textarea>
    </div> </div>
    <div class="form-group col-md-4 ml-5 mb-3 mt-3">
    <button class="btn btn-outline-secondary" type="submit" > Salvar </button>
    <button  class="btn btn-outline-secondary" type="reset" id="cancelar" > Cancelar </button>

 
   <div class="form-group col-md-4 ml-5 mb-3 mt-3">
  </form>      </div>
  </div>` 
;

document.getElementById("formEvento").addEventListener("submit", (e)=>{
    var tipo = document.getElementById("Tevento").value;
    var data = document.getElementById("data").value;
    var dataA = document.getElementById("dataAlternativa").value;
    var horario = document.getElementById("horario").value;
    var descricao = document.getElementById("descricaoEvento").value;

    e.preventDefault();
    createTask(tipo, data, dataA, horario, descricao);
    formEvento.reset();
});

}

 
function updateTask(id, tipo,data, dataA, horario,descricao){
 window.location.href='#ancora'; 
  document.getElementById("first").innerHTML=`<form id="formEvento2" > <div class=" container4">
  <div class="row " >
    <div class="form-group col-md-4 ml-5 mb-3 mt-3">
      
     <label   for="evento" class="lab ml-3 " >Tipo do evento</label> 
                  <select id="Tevento" class="form-control inp">
                          <option class= "inp"disabled selected>Selecione uma opção...</option>
                          <option value="Aniversário">Aniversário</option>
                          <option value="Casamento">Casamento</option>
                          <option value="Confraternizacão">Confraternização</option>
                  </select>
    </div>
    <div class="col-md-2 col-mb-2 mt-3 ">
      
      <label for="data" class="lab ml-3 ">Data</label> 
 <input  type="text" class="form-control inp" id="data"> </div>
  
    <div class="col-md-2 col-mb-2 mt-3">
  <label for="dataAlternativa" class="lab ml-3 "> Data Alternativa</label> 
        <input  type="text" class="form-control inp" id="dataAlternativa"> </div>
          
           <div class="col-md-2 col-mb-2 mt-3">
        <label  for="horario" class="lab ml-3 ">Horário</label> 
        <input  type="time" class="form-control inp" id="horario"> </div>
        </div>
</div>
 
    
<div class="row">
  
<div class="form-group col-md-4 ml-5 ">
    <label for="form-group" class="lab ml-3">Descrição</label>
    <textarea class="form-control text" id="descricaoEvento" rows="3"></textarea>
  </div> </div>
  <div class="form-group col-md-4 ml-5 mb-3 mt-3">
  <button style="display:none" class="btn btn-outline-secondary"  > Salvar </button>
 <button   class="btn btn-outline-secondary" type="reset" id="cancelar" > Cancelar </button>
 <button   class="btn btn-outline-secondary" id="atualizar" type="submit" > Atualizar </button>
 <div class="form-group col-md-4 ml-5 mb-3 mt-3">
</form>      </div>
</div>`;

  document.getElementById("formEvento2").addEventListener ("submit", (e)=>{
      e.preventDefault();
      
       
  });
    document.getElementById("cancelar").addEventListener("click", (e) =>{
       reset(); 
    });
    document.getElementById("atualizar").addEventListener("click", (e) =>{
        updateTask2(id,document.getElementById("Tevento").value,document.getElementById("data").value,document.getElementById("dataAlternativa").value,document.getElementById("horario").value,document.getElementById("descricaoEvento").value);
        
     });
      
     document.getElementById("Tevento").value=tipo;
     document.getElementById("data").value=data;
     document.getElementById("dataAlternativa").value=dataA;
     document.getElementById("horario").value=horario;
     document.getElementById("descricaoEvento").value=descricao;
     console.log(error);

}

function updateTask2(id, tipo, data, dataA, horario, descricao){
  console.log(tipo);
    var task2={
            id:id,
            tipo: tipo,
            data:data,
            dataA:dataA,
            horario:horario,
            descricao: descricao
        } 
        let db = firebase.database().ref("eventos/"+id);
        db.set(task2);

        document.getElementById("cardEvento").innerHTML='';
        readTask();
        reset();
        console.log(tipo);
        console.log(error);

        
    }

function deleteTask(id){
  console.log(id);
    var task = firebase.database().ref("eventos/" +id);
    task.remove();
    reset();
    document.getElementById("cardEvento").innerHTML='';
    readTask();
    console.log(id);
}








