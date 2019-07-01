const lista = document.querySelector('#ulLista');
const formLista = document.querySelector('#formLista');

function renderLista(doc){
    let li = document.createElement('li');
    let nome = document.createElement('span');
    let email = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    nome.textContent = doc.data().nome;
    email.textContent = doc.data().email;
   
    li.appendChild(nome);
    li.appendChild(email);

    ulLista.appendChild(li);
}




db.collection('lista').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderLista(doc);
    })
});

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
     <td> <button class="btn btn-default  btn-lg btn-lg" onclick ="editar('${doc.id}','${doc.data().nome}', '${doc.data().email}')"> <i class="fas fa-edit cor"></i> </button> 
      <button class="btn btn-default  btn-lg"  onclick ="eliminar('${doc.id}')"><i class="fas fa-trash-alt cor"> </i> </button> </td>
      <td> <button class="btn btn-default  btn-lg "> <i class="fas fa-file-import"></i> </button> </td>
   </tr>`
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