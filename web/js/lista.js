




formLista.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('lista').add({
        nome: formLista.nome.value,
        email: formLista.email.value
    });
    formLista.nome.value ='';
    formLista.email.value=''
})

var tabela = document.getElementById('tabela');
db.collection('lista').get().then((querySnapshot) =>{
    querySnapshot.forEach((doc) => {
     tabela.innerHTML+=` <tr class = "ulLista">
     <th scope="row">${doc.id}</th>
     <td>${doc.data().nome}</td>
     <td>${doc.data().email}</td>
     <td> <button class="btn btn-default  btn-lg btn-lg" onclick ="editar('${doc.id}','${doc.data().nome}', '${doc.data().email}')"> <i class="fas fa-edit "></i> </button> 
      <button class="btn btn-default  btn-lg"  onclick ="eliminar('${doc.id}')"> <i class="fas fa-trash-alt "> </i> </button> </td>
      <td> <button class="btn btn-default  btn-lg " data-toggle="modal" data-target="#modalExemplo"> <i class="fas fa-file-import"></i> </button> </td>
   
      </tr>    <div class="modal fade "  id="modalExemplo6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content " >
          <div class="modal-header  " style="background-color:black"> <div class="mx-auto">
            <h5 class="modal-title text-center" style="background-color:black; color: white"id="exampleModalLabel" >Escolha o evento para adicionar  o local</h5>
          </div><button type="button" style=" color:white" class="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="col-sm-11 mx-auto " id="cardLocais"> </div>
          </div>
          <div class="modal-footer " style="background-color:black">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
    `
    }) ;
});

function eliminar(id){
    db.collection('lista').doc(id).delete().then(function(){
        console.log("Document successfully deleted!");
    }).catch(function(error){
        console.error("Error removing document:", error);
    });
}

function editar(id,nome,email){

    document.getElementById('nome').value = nome;
    document.getElementById('email').value = email;

    var btn = document.getElementById('botao');
    btn.innerHTML='Salvar Alterações';

    btn.onclick = function(){

   var edLista = db.collection('lista').doc(id);

   var nome = document.getElementById('nome').value;
   var email = document.getElementById('email').value;

   return edLista.update({
    nome: nome,
    email: email
   })
   .then(function(){
       console.log("Document successfully");
       btn.innerHTML='Adicionar a Lista';
   })
   .catch(function(error){
       console.error("error updating: " , error);
   });
}
} 

