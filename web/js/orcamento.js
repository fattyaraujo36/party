function inicializar(){
readLocais();
readProdutos();
readCerimonialista();
}



function readLocais(){
    var task2 = firebase.database().ref('localSolicitados/');
    task2.on("child_added", function(data){
      var taskValue2= data.val();
      console.log(taskValue2);
    var card2 =  document.getElementById('localSolicitados');
   card2.innerHTML+=`

   
    
     <div class="row mx-auto">
     <div class="col-sm-8 ca mx-auto mt-3">
      <div class="card text-center ca">

  <div class="card-body">
        <h5 style="color:white"class="card-title h">Nome: ${taskValue2.nome}</h5>
        <div class="mx-auto">
          <p class="card-text ct text-justify ">Contato: ${taskValue2.contato}, Bairro: ${taskValue2.bairro}, Rua: ${taskValue2.rua} </p>
  
        <div class="card-footer">
            <p style="color: #daa520;" > Preço: ${taskValue2.preco2} </p>
      <a href="#" class="btn  btn-primary">Excluir</a>
  <a href="#" class="btn btn-primary">Editar</a>
      </div>
   </div> </div> </div> </div>
        
      
      `
    //mostrarImagensDeFirebase();
    });
  } 

  function readProdutos(){
    var task2 = firebase.database().ref('proSolicitados/');
    task2.on("child_added", function(data){
      var taskValue2= data.val();
      console.log(taskValue2);
    var card2 =  document.getElementById('proSolicitados');
   card2.innerHTML+=`

   
    
     <div class="row mx-auto">
     <div class="col-sm-8 ca mx-auto mt-3">
      <div class="card text-center ca">
    

  <div class="card-body">
        <h5 style="color: white;"class="card-title h  ">Tipo: ${taskValue2.tipo}</h5>
        <div class="mx-auto">
          <p class="card-text ct text-center ">Nome: ${taskValue2.nome},      Quantidade: ${taskValue2.qtd} </p>
  
        <div class="card-footer">
            <p style="color: #daa520;"> Preço: ${taskValue2.preco} </p>
      <a href="#" class="btn  btn-primary">Excluir</a>
  <a href="#" class="btn btn-primary">Editar</a>
      </div>
   </div> </div> </div> </div>
        
      
      `
    //mostrarImagensDeFirebase();
    });
  } 

  function readCerimonialista(){
    var task2 = firebase.database().ref('ceriSolicitados/');
    task2.on("child_added", function(data){
      var taskValue2= data.val();
      console.log(taskValue2);
    var card2 =  document.getElementById('ceriSolicitados');
   card2.innerHTML+=`

   
    
     <div class="row mx-auto mb-5">
     <div class="col-sm-8 ca mx-auto mt-3">
      <div class="card text-center ca">

  <div class="card-body">
        <h5  style="color:white" class="card-title h">Nome: ${taskValue2.nome}</h5>
        <div class="mx-auto">
          <p class="card-text ct text-center ">Email: ${taskValue2.email}, Contato: ${taskValue2.contato} </p>
  
        <div class="card-footer">
            <p style="color: #daa520;"> Preço: ${taskValue2.preco} </p>
      <a href="#" class="btn  btn-primary">Excluir</a>
  <a href="#" class="btn btn-primary">Editar</a>
      </div>
   </div> </div> </div> </div>
       
   
      
      `
    //mostrarImagensDeFirebase();
    });
  } 