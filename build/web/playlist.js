
const lista = document.querySelector('#ulLista');
const formPlaylist = document.querySelector('#formPlaylist');

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


formPlaylist.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('playlist').add({
        nome: nome,
        cantorBanda : cantorBanda,
        genero : genero
    });
    formPlaylist.nome.value ='';
    formPlaylist.cantorBanda.value='';
    formPlaylist.genero.value='';
})

var tabela = document.getElementById('tabela');
db.collection('playlist').get().then((querySnapshot) =>{
    querySnapshot.forEach((doc) => {
        tabela.innerHTML+=` <tr class = "ulLista">
        <th scope="row">${doc.id}</th>
        <td>${doc.data().nome}</td>
        <td>${doc.data().cantorBanda}</td>
        <td>${doc.data().genero}</td>
        <td> <button class="btn btn-default" onclick ="editar('${doc.id}','${doc.data().nome}', '${doc.data().cantorBanda}', '${doc.data().genero}')"> <i class="fas fa-edit cor"></i> </button> 
         <button class="btn btn-default "  onclick ="eliminar('${doc.id}')"><i class="fas fa-trash-alt cor"> </i> </button> </td>
        
      </tr>`
       }) ;
});

function eliminarPlaylist(id){
    db.collection('playlist').doc(id).delete().then(function(){
        console.log("Document successfully deleted!");
    }).catch(function(error){
        console.error("Error removing document:", error);
    });
}

function editarPlaylist(nome,cantorBanda,genero){

    document.getElementById('nome').value = nome;
    document.getElementById('cantorBanda').value = cantorBanda;
    document.getElementById('genero').value = genero; 

    var btnP = document.getElementById('botao');
    btnP.innerHTML='Salvar Alterações';

    btnP.onclick = function(){

   var edLista = db.collection('playlist').doc(id);

   var nome = document.getElementById('nome').value;
   var cantorBanda = document.getElementById('cantorBanda').value;
   var genero = document.getElementById('genero').value;

   return edLista.update({
    nome: nome,
    cantorBanda: cantorBanda,
    genero: genero
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