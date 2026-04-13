// ===============================
// LAPIDAR BASE — ENGINE ESTADO v1
// ===============================


// salvar estado

function salvarEstadoProjeto(){

localStorage.setItem(
"lapidar_projeto",
JSON.stringify(projeto)
);

}


// carregar estado

function carregarEstadoProjeto(){

const estadoSalvo =
localStorage.getItem("lapidar_projeto");


if(estadoSalvo){

Object.assign(
projeto,
JSON.parse(estadoSalvo)
);

}

}


// resetar estado

function limparEstadoProjeto(){

localStorage.removeItem(
"lapidar_projeto"
);

}
