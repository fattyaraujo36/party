function readLocais(){
    var task= firebase.database().ref("eventos/");
    task.on("child_added", function(data){
        var taskValue = data.val();
        document.getElementById("cardLocais").innerHTML+=`<div class="card text-center ca">
     
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

function adicionados(){
  window.location.href = "orcamento.html";
}