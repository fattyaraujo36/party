var d = new Date();
var t = d.getTime();
var counter = t;
var formLocais = document.getElementById('formLocais');
document.getElementById('salvarLocais'). addEventListener("click", (e)=>{
    var nameL = document.getElementById('nameLocais').value;
    var bairroL = document.getElementById('bairroLocais').value;
    var ruaL = document.getElementById('ruaLocais').value;
    var numL = document.getElementById('numLocais').value;
    var emailL = document.getElementById('emailLocais').value;
    var precoL = document.getElementById('precoLocais').value;
    var descricaoL = document.getElementById('emailLocais').value;
    e.preventDefault();
    
    formLocais.reset();
})