window.onload = readTask;

var d = new Date();
var t = d.getTime();
var counter = t;


document.getElementById("formBuffet").addEventListener("submit", (e)=>{

  

  e.preventDefault();
  insert();
  formBuffet.reset();
});





function insert(){
  
  
 
  var tipoP = document.getElementById('tEvento').value;
  var nomeP = document.getElementById('nomeProd').value;
  var qtdP = document.getElementById('qtdProd').value;
  var precoP = document.getElementById('precoProd').value;
  var descricaoP = document.getElementById('descricaoProd').value;

  createTask(tipoP, nomeP, qtdP, precoP, descricaoP);

} 

function createTask(tipoP, nomeP, qtdP, precoP, descricaoP){ 
  counter+=1;
  

      var task={
      id: counter,
      tipo:  tipoP,
      nome:  nomeP,
      qtd:  qtdP,
      preco:  precoP,
      descricao: descricaoP

    }
    let db = firebase.database().ref("buffet/"+counter);
    db.set(task);
    
  
  
  };

  function readTask(){
    var task = firebase.database().ref('buffet/');
    task.on("child_added", function(data){
      var taskValue= data.val();
      console.log(taskValue);
    var card =  document.getElementById('tabelaBuffet');
   card.innerHTML+=  ` <tr class = "ulLista">
   <td>${taskValue.tipo}</td>
   <td>${taskValue.nome}</td>
   <td>${taskValue.qtd}</td>
   <td>${taskValue.preco}</td>
   <td>${taskValue.descricao}</td>
   <td>  <button type="submit" class="btn btn-primary"  onclick = "updateTask(${taskValue.id}, '${taskValue.tipo}',' ${taskValue.nome}', ' ${taskValue.qtd}' , ' ${taskValue.preco}',  ' ${taskValue.descricao}' )" > <i class="fas fa-edit mr-3 "></i> Editar
   </button> 
    <button class="btn btn-primary" onclick="readEventos();"  data-toggle="modal" data-target="#modalExemplo"><i class="fas fa-trash-alt mr-3 "> </i>Excluir</button> </td>
     </td>
   
    <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header navInicio">
         
          <button type="button"  class="close" data-dismiss="modal" aria-label="Fechar">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body navInicio">
          Tem certeza que deseja excluir este produto?
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

function readEventos(){
  var task= firebase.database().ref("buffet/");
  task.on("child_added", function(data){
    var taskValue = data.val();
    document.getElementById("cardE").innerHTML=`    <div class="navInicio">
           <button type="button" class=" btn btn-outline-secondary " data-dismiss="modal" >Voltar</button>
  
          <button class="btn btn-primary "   data-dismiss="modal"  onclick="deleteTask(${taskValue.id});" >Excluir</button>
        </div> <div>
  `
  
  console.log('hello');
  }); }
  
  
  function deleteTask(id){
  console.log(id);
    var task = firebase.database().ref("buffet/" +id);
    task.remove();
   
   // reset();
  //   document.getElementById("modalExemplo10").innerHTML='';
  //   readConvidados();
  document.getElementById("tabelaBuffet").innerHTML='';
  readTask();
 //reset();
  
  
    
  };
  
  /*
  
  function adicionados(){
  window.location.href = "orcamento.html";
  } 
  */
  function reset(){
  document.getElementById("first").innerHTML=` <form id="formBuffet">
  <div class="row " >
 
      <div class="form-group col-md-4 ml-5 mb-3 mt-3">
     <label  for="evento"  class="lab ml-3 ">Tipo do evento</label>
                  <select class="form-control inp" id="tEvento">
                          <option disabled selected>Selecione uma opção...</option>
                          <option value="Doce">Doce</option>
                          <option value="Salgado">Salgado</option>
                          <option value="Outros">Outros</option>
                  </select>
    </div>
    <div class="col-md-2 col-mb-3 mt-3">
      <label for="Cantor" class="lab ml-3 ">Nome</label>
 <input  type="text" class="form-control inp" id="nomeProd"> </div>
  
    <div class="col-md-2 col-mb-3 mt-3">
   <label for="data" class="lab ml-3 "> Quantidade</label>
        <input  type="text" class="form-control inp" id="qtdProd"> </div>
          
           <div class="col-md-2 col-mb-3 mt-3 col-">
        <label  for="horario" class="lab ml-3 ">Preço</label>
        <input  type="text" class="form-control inp" id="precoProd"> </div>
        
 </div>
    
   <div class="row">
<div class="form-group ml-5 col-md-4   ">
    <label for="exampleFormControlTextarea1" class=" form-group lab ml-3">Descrição</label>
    <textarea class="form-control text" id="descricaoProd" rows="3"></textarea>

  </div>
  </div>

  <div class="form-group col-md-8 ml-5 mb-3 mt-3">
  <button class="btn btn-outline-secondary" type="submit" o> Salvar </button>
 <button class="btn btn-outline-secondary" type="reset" > Cancelar </button>
 <a class="btn btn-dark ml-5" href="produtos.html" >Consultar Loja</a> 
</div>  
</form> ` 
  ;
  
  document.getElementById("formBuffet").addEventListener("submit", (e)=>{
    var tipoP = document.getElementById('tEvento').value;
    var nomeP = document.getElementById('nomeProd').value;
    var qtdP= document.getElementById('qtdProd').value;
    var precoP = document.getElementById('precoProd').value;
    var descricaoP = document.getElementById('descricaoProd').value;
  
  
  
  e.preventDefault();
  createTask(tipoP,nomeP,  qtdP, precoP, descricaoP);
  formBuffet.reset();
  });
  
  }
  
  
  function updateTask(id, tipoP,nomeP,  qtdP, precoP, descricaoP){
  window.location.href='#ancora'; 
  document.getElementById("first").innerHTML=`<form id="formBuffet2">
  <div class="row " >
 
      <div class="form-group col-md-4 ml-5 mb-3 mt-3">
     <label  for="evento"  class="lab ml-3 ">Tipo do evento</label>
                  <select class="form-control inp" id="tEvento">
                          <option disabled selected>Selecione uma opção...</option>
                          <option value="Doce">Doce</option>
                          <option value="Salgado">Salgado</option>
                          <option value="Outros">Outros</option>
                  </select>
    </div>
    <div class="col-md-2 col-mb-3 mt-3">
      <label for="Cantor" class="lab ml-3 ">Nome</label>
 <input  type="text" class="form-control inp" id="nomeProd"> </div>
  
    <div class="col-md-2 col-mb-3 mt-3">
   <label for="data" class="lab ml-3 "> Quantidade</label>
        <input  type="text" class="form-control inp" id="qtdProd"> </div>
          
           <div class="col-md-2 col-mb-3 mt-3 col-">
        <label  for="horario" class="lab ml-3 ">Preço</label>
        <input  type="text" class="form-control inp" id="precoProd"> </div>
        
 </div>
    
   <div class="row">
<div class="form-group ml-5 col-md-4   ">
    <label for="exampleFormControlTextarea1" class=" form-group lab ml-3">Descrição</label>
    <textarea class="form-control text" id="descricaoProd" rows="3"></textarea>

  </div>
  </div>

  <div class="form-group col-md-8 ml-5 mb-3 mt-3">
 
<button   class="btn btn-outline-secondary mr-3 " id="atualizar"  > Atualizar </button>
<button   class="btn btn-outline-secondary "type="reset" id="cancelar" > Cancelar </button>
 <a class="btn btn-dark ml-5" href="produtos.html" >Consultar Loja</a> 
</div>  
</form>
  `;
  
  document.getElementById("formBuffet2").addEventListener ("submit", (e)=>{
    e.preventDefault();
    
     
  });
  document.getElementById("cancelar").addEventListener("click", (e) =>{
     reset(); 
  });
  document.getElementById("atualizar").addEventListener("click", (e) =>{
      updateTask2(id,document.getElementById("tEvento").value,document.getElementById("nomeProd").value,  document.getElementById('qtdProd').value,   document.getElementById('precoProd').value,  document.getElementById('descricaoProd').value);
      
   });
    
   

   document.getElementById("tEvento").value=tipoP;
   document.getElementById('nomeProd').value=nomeP;
   document.getElementById('qtdProd').value=qtdP;
   document.getElementById('precoProd').value=precoP;
   document.getElementById('descricaoProd').value=descricaoP;
   console.log(error);
  
  }
  
  function updateTask2(id, tipoP,nomeP,  qtdP, precoP, descricaoP){
  
    
    //file.addEventListener("change", subirImagemAFirebase, false);
  
    
  
    
   
  console.log(id);
    
    var task2={
      id: counter,
      tipo:  tipoP,
      nome:  nomeP,
      qtd:  qtdP,
      preco:  precoP,
      descricao: descricaoP
        } 
        let db = firebase.database().ref("buffet/"+id);
        db.set(task2);
    
        document.getElementById("tabelaBuffet").innerHTML='';
        readTask();
        reset();
        console.log(error);
    
        
      };
  
    

;/*`
   <div class="card-body ca" style= "background-color: black;">
  
   <h5 class="card-title "> ${taskValue.nome}  </5>
    <p class=" "> Bairro: ${taskValue.bairro} , Rua: ${taskValue.rua}, Num: ${taskValue.num}, Email: ${taskValue.email}  </p>
  
    <p  class= > Preço: ${taskValue.preco}  </p>
    <p  class="card-text "> Descrição: ${taskValue.descricao}  </p>
  <a href="#" class="btn  btn-primary">Excluir</a>
  <a href="#" class="btn btn-primary">Editar</a>
  
  </div> 
  
      
      `
    
    }); */
  
