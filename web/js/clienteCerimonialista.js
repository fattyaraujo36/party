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
        <h5  style="color: white" class="card-title h">Nome: ${taskValue.nomeofc}</h5>
        <div class="align-center">
          <p class="card-text ct text-center">Email: ${taskValue.emailCeri}, Contato: ${taskValue.contatoCeri} </p>
  
          <p class="card-text ct text-center">Descrição: ${taskValue.descricaoCeri} </p>
        <div class="card-footer">
            <p  style="color: #daa520;"> Preço: ${taskValue.precoCeri} </p>
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
         Tem certeza que deseja solicitar os serviços deste(a) cerimonialista?
       </div>
       <div class="modal-footer navInicio">
         <button type="button"   class="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
         <button type="button" onclick="inserirCeri( ${taskValue.id},' ${taskValue.nomeofc}',' ${taskValue.emailCeri}', '${taskValue.contatoCeri}', ' ${taskValue.precoCeri}' );"class="btn btn-primary"  data-dismiss="modal" >Confirmar</button>
       </div>
     </div>
   </div>
 </div>
 
 <div class="modal fade "  id="modalExemplo6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content " >
       <div class="modal-header  " style="background-color:black"> <div class="mx-auto">
         <h5 class="modal-title text-center" style="background-color:black; color: white"id="exampleModalLabel" >Escolha o evento para adicionar  este(a) cerimonialista!</h5>
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
  
  function inserirCeri(id, nome, email,  contato, preco){

    
    
    
    /*
      var d = new Date();
      var t = d.getTime();
      var counter = t;
        counter+=1;
        
      */
        var task={
        id: id,
        nome:  nome,
        email:email,
        contato: contato,
        preco:  preco
      
      }
      let db = firebase.database().ref("ceriSolicitados/"+id);
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


