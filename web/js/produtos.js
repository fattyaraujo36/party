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
        <h5 class="card-title h " style="color: white">Tipo: ${taskValue2.tipo2}</h5>
        <div class="mx-auto">
          <p class="card-text ct text-center ">Nome: ${taskValue2.nomeofc2}, Quantidade: ${taskValue2.qtd} </p>
          </div>
        <div class="card-footer">
            <p style="color: #daa520;"> Preço: ${taskValue2.preco2} </p>
            <button  class="btn btn-outline-secondary"  data-toggle="modal" data-target="#modalExemplo">Escolher</button>

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
         Tem certeza que deseja este produto ? 
       </div>
       <div class="modal-footer navInicio">
         <button type="button"   class="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
         <button type="button" onclick="inserirProduto(${taskValue2.id}, ' ${taskValue2.tipo2}', ' ${taskValue2.nomeofc2}', ' ${taskValue2.qtd}', ' ${taskValue2.preco2}');" class="btn btn-primary" data-dismiss="modal" >Confirmar</button>
       </div>
     </div>
   </div>
 </div>
 
 <div class="modal fade "  id="modalExemplo6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content " >
       <div class="modal-header  " style="background-color:black"> <div class="mx-auto">
         <h5 class="modal-title text-center" style="background-color:black; color: white"id="exampleModalLabel" >Escolha o evento para adicionar  este produto!</h5>
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


function inserirProduto(id, tipo, nome, qtd, preco){

var d = new Date();
var t = d.getTime();
var counter = t;
  counter+=1;
  

  var task={
  id: counter,
  tipo:  tipo,
  nome:  nome,
  qtd:  qtd,
  preco:  preco

}
let db = firebase.database().ref("proSolicitados/"+counter);
db.set(task);
console.log(id);
  console.log(tipo);
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
  
  
  