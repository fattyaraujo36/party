//window.onload = readConvidados();



var user;
var email;
var uid;

var nome ;
var emailConvidado;
/*
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




*/



var d = new Date();
var t = d.getTime();
var counter = t;

document.getElementById("formLista").addEventListener("submit", (e)=>{
     nome = document.getElementById("nome").value;
     emailConvidado = document.getElementById("email").value;
    
    e.preventDefault();
   createTask(nome,emailConvidado);
    formLista.reset();
});

function createTask(  nome,emailConvidado){
counter+=1;
var task={
    id:counter,
 //   uid:uid,
    nome: nome,
    email:emailConvidado
}
let db = firebase.database().ref("convidados/"+counter);
db.set(task);

//userEvento();
} ;

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
}
*/
function readConvidados(){
    var task= firebase.database().ref("convidados/");
    task.on("child_added", function(data){
        var taskValue = data.val();
    var tabela = document.getElementById('tabela');
 tabela.innerHTML+=` <tr class = "ulLista">
             
             <td>${taskValue.nome}</td>
             <td>${taskValue.email}</td>
             <td>      <button type="submit" class="btn btn-primary"  onclick = "updateTask(${taskValue.id}, '${taskValue.nome}',' ${taskValue.email}' )" > <i class="fas fa-edit mr-3 "></i> Editar
             </button> 
             <button class="btn btn-primary"data-toggle="modal" onclick = "readEventos(); " data-target="#modalExemplo10"><i class="fas fa-trash-alt mr-3 "> </i>Excluir</button> </td>
              <td> <button class="btn btn-primary  btn-lg " onclick= "readEventos2();" data-toggle="modal"  data-target="#modalExemplo11" id="enviar"> <i class="fas fa-file-import"></i> </button> </td>
              <div class="modal fade" id="modalExemplo10" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header navInicio">
                   
                    <button type="button"  class="close" data-dismiss="modal" aria-label="Fechar">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body navInicio">
                    Tem certeza que deseja excluir este Convidado?
                  </div>
                  <div class="modal-footer navInicio"> 
                    <div class="col-sm-11 mx-auto " id="cardE"> </div>
            
            
                </div> </div>
              </div>
            </div> 
              
            <div class="modal fade "  id="modalExemplo11" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content "  style="background-color:black" >
                <div class="modal-header  " style="background-color:black"> <div class="mx-auto">
                  <h5 class="modal-title text-center" style="background-color:black; color: white"id="exampleModalLabel" >Escolha o evento para adicionar  este produto!</h5>
                </div><button type="button" style=" color:white" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body "  style="background-color:black">
                  <div class="col-sm-11 mx-auto " id="cardCerimonialista"> </div>
                </div>
                <div class="modal-footer " style="background-color:black">
                  <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>

          </tr> 
          </tbody>
        </table>
            `
        });

    };   
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
  
  };
  

  
function enviarConvite(){ /*
  var task= firebase.database().ref("eventos/");
  task.on("child_added", function(data){
      var taskValue = data.val();  
      document.getElementById("cardConvidado").innerHTML+=`  <div class="container4"  >
      

 
      <div class="row pt-5">
   <div class="col-sm-5 ca mx-auto mb-4" >
      <h2 class=" text-center pt-5 " style="color: #daa520">${taskValue.tipo}  </h2>
       <h2 class="text-center" style="color: #daa520;"> Camille</h2> 
       <div class="card-body">
         <div class="align-center">
         <p class="card-text ct text-center">
     <p class=" text-lef " style="color: white"> Data:  ${taskValue.data} </p>
       <p class=" text-left "  style="color: white"> Horário:  ${taskValue.horario} </p>
       <p class=" text-left "  style="color: white">  Descrição: ${taskValue.descricao} </p> 
       <p class="text-center">
        <button class="btn btn-outline-secondary  "data-toggle="modal" data-target="#modalExemplo3">Confirmar Presença</button> </p>
      </div> <p>
           
                </p>
 
     </div>
     </div>
`



  }); */
  var task= firebase.database().ref("eventos/");
      task.on("child_added", function(data){
          var taskValue = data.val();
          document.getElementById("cardConvidado").innerHTML+=`<div class="card text-center ca ">
       
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


       



function readEventos(){
  var task= firebase.database().ref("convidados/");
  task.on("child_added", function(data){
      var taskValue = data.val();
      document.getElementById("cardE").innerHTML=`    <div class="navInicio">
             <button type="button" class=" btn btn-outline-secondary " data-dismiss="modal" >Voltar</button>

            <button class="btn btn-primary "  data-dismiss="modal" onclick="deleteTask(${taskValue.id});  ">Excluir</button>
          </div> <div>
`
  
console.log('hello');
}); }


function deleteTask(id){
    console.log(id);
      var task = firebase.database().ref("convidados/" +id);
      task.remove();
     // reset();
   //   document.getElementById("modalExemplo10").innerHTML='';
  //   readConvidados();
  document.getElementById("tabela").innerHTML='';
  readConvidados();
  //reset();
  
      
  }
  
  

  /*
 
function adicionados(){
  window.location.href = "orcamento.html";
} 
*/
function reset(){
    document.getElementById("first").innerHTML=`<form  id="formLista">
    <div class="row"  >
    <div class="form-group col-md-3 ml-5 mb-3 mt-3">
    <label for="nome" class="lab ml-3 ">Nome </label>
    <input type="text" class="form-control inp"  id="nome">
  </div>
  <div class="col-md-3 col-mb-3 mt-3">
    <label for="email" class="lab ml-3">Email</label>
    <input type="Email" class="form-control inp" id="email">
  </div>
  
  
  <div class="col-md-2 col-mb-3 mt-5">
 <button type="submit" class="btn btn-outline-secondary form-control"> Adicionar a Lista </button>
 </div>
 </div>
      </form>
    </div>` 
;

document.getElementById("formLista").addEventListener("submit", (e)=>{
    var nome = document.getElementById("nome").value;
    var emailConvidado = document.getElementById("email").value;
   

    e.preventDefault();
    createTask(nome,emailConvidado);
    formLista.reset();
});

}

 
function updateTask(id,nome,emailConvidado){
 window.location.href='#ancora'; 
  document.getElementById("first").innerHTML=`<form  id="formLista2">
  <div class="row mx-auto"  >
 <div class="form-group col-md-3 ml-5 mb-3 mt-3">
  <label for="nome" class="lab ml-3 ">Nome </label>
  <input type="text" class="form-control inp"  id="nome">
</div>
<div class="col-md-3 col-mb-3 mt-3">
  <label for="email" class="lab ml-3">Email</label>
  <input type="Email" class="form-control inp" id="email">
</div>


<div class="col-md-3 mb-3 mt-5">  
<button   class="btn btn-outline-secondary mr-3 " id="atualizar"  > Atualizar </button>
<button   class="btn btn-outline-secondary "type="reset" id="cancelar" > Cancelar </button>
</div> </div>
    </form>
  `;

  document.getElementById("formLista2").addEventListener ("submit", (e)=>{
      e.preventDefault();
      
       
  });
    document.getElementById("cancelar").addEventListener("click", (e) =>{
       reset(); 
    });
    document.getElementById("atualizar").addEventListener("click", (e) =>{
        updateTask2(id,document.getElementById("nome").value,document.getElementById("email").value);
        
     });
      
     document.getElementById("nome").value=nome;
     document.getElementById("email").value=emailConvidado;
    
     console.log(error);

}

function updateTask2(id, nome,emailConvidado){
  console.log(id);
    var task2={
            id:id,
            nome: nome,
            email:emailConvidado
        } 
        let db = firebase.database().ref("convidados/"+id);
        db.set(task2);

        document.getElementById("tabela").innerHTML='';
        readConvidados();
        reset();
        console.log(tipo);
        console.log(error);

        



    } 







