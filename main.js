function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome?");
let elemento = document.querySelector("#nome-usuario");
elemento.textContent = nomeUsuario;
}

inserirNome ();

while (nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if (nomeUsuário == null){
    elemento.textContent = 'seja muito bem vindo.';
}else{
    elemento.textContent = nomeUsuário;
}