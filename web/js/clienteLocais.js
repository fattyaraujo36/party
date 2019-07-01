
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
      <img src= "${taskValueL.url}"class="imgcard mx-auto md-block mt-3" alt="...">
  
  <div class="card-body">
        <h5  style="color: white" class="card-title h">Nome: ${taskValueL.nomeL}</h5>
        <div class="mx-auto">
          <p class="card-text ct text-justify ">Bairro: ${taskValueL.bairroL}, Rua: ${taskValueL.ruaL}, Número: ${taskValueL.numL}</p>
          <p class="card-text ct text-justify "> Email: ${taskValueL.emailL}, ContatoL: ${taskValueL.contatoL} </p>

          <p class="card-text ct text-justify ">Descrição: ${taskValueL.descricaoL}</p>
          <p style="color: #daa520;"class="card-text ct text-justify ">Preço: ${taskValueL.precoL}</p>
 
          <div class="card-footer">
            <button type="submit" class="btn btn-outline-secondary" data-toggle="modal" data-target="#modalExemplo"  >Adicionar </button>

      </div>
   </div> </div> </div> </div>
        
      
   <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header navInicio">
         <h5 class="modal-title" id="exampleModalLabel"> </h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body navInicio ">
         Tem certeza que deseja este local ?
       </div>
       <div class="modal-footer navInicio">
         <button type="button"   class="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
         <button type="button" onclick="inserirLocal(${taskValueL.id}, '  ${taskValueL.nomeL}','  ${taskValueL.bairroL}', ' ${taskValueL.ruaL}', '${taskValueL.contatoL}','  ${taskValueL.precoL}');"   class="btn btn-primary" data-dismiss="modal"> Confirmar</button>
       </div>
     </div>
   </div>
 </div>
 
 <div class="modal fade "  id="modalExemplo6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content " >
       <div class="modal-header  " style="background-color:black"> <div class="mx-auto">
         <h5 class="modal-title text-center" style="background-color:black; color: white"id="exampleModalLabel" >Escolha o evento para adicionar  este local!</h5>
       </div><button type="button" style=" color:white" class="close" data-dismiss="modal" aria-label="Fechar">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <div class="col-sm-11 mx-auto " id="cardCerimonialista"> </div>
       </div>
       <div class="modal-footer " style="background-color:black">
         <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
       </div>
     </div>
   </div>
 </div>
        
      
      `
    //mostrarImagensDeFirebase();
    });
  } 


function inserirLocal(id, nome, bairro, rua, contato, preco){
/*
  var d = new Date();
  var t = d.getTime();
  var counter = t;
    counter+=1;
    
  */
    var task={
    id: id,
    nome:  nome,
    bairro:  bairro,
    rua:  rua,
    contato: contato,
    preco:  preco
  
  }
  let db = firebase.database().ref("localSolicitados/"+id);
  db.set(task);
  console.log(id);
   
    console.log(nome);
  };
  
  function readEventos(){
    var task= firebase.database().ref("eventos/");
    task.on("child_added", function(data){
        var taskValue = data.val();
        document.getElementById("cardCerimonialista").innerHTML+=`<div class="card text-center ca">
     
        <div class="card-body ca ">
          <div class="align-center">
              <p class="card-text ct text-center">  <span class="mr-3" > Tipo: ${taskValue.tipo}    </span>    <span class="mr-3 ml-5" >     Data: ${taskValue.data}   </span>    <span  class="mr-3">   Data Alternativa: ${taskValue.dataA} </span> <span class="mr-3" >   Horário: ${taskValue.horario} </span > </p>
            
          <p class="card-text ct text-center"> <span >  Descrição: ${taskValue.descricao}  </p>
         

      <a  class="btn btn-primary" style="color:white"  onclick="adicionados()" > Adicionar </a>
    </div>
  </div> 
  </div>  
  `
    });

}
  
  