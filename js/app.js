// ===============================
// LAPIDAR BASE — CORE + ENGINE v1
// ===============================

// Estado global do projeto

const projeto = {

arquivo: null,

formato: null,
fonte: null,
margem: null,
recuo: null,
hifenizacao: null,

titulo: null,
autor: null,
subtitulo: null,
contracapa: null

};


// ===============================
// CORE — Upload Manuscrito
// ===============================

function registrarUpload(input){

if(input.files.length > 0){

projeto.arquivo = input.files[0].name;

alert("Arquivo registrado: " + projeto.arquivo);

}

}


// ===============================
// CORE — Configuração Editorial
// ===============================

function registrarConfiguracao(){

projeto.formato =
document.getElementById("formato")?.value;

projeto.fonte =
document.getElementById("fonte")?.value;

projeto.margem =
document.getElementById("margem")?.value;

projeto.recuo =
document.getElementById("recuo")?.value;

projeto.hifenizacao =
document.getElementById("hifenizacao")?.value;

alert("Configuração salva.");

}


// ===============================
// CORE — OKAPISTA
// ===============================

function registrarCapa(){

projeto.titulo =
document.getElementById("titulo")?.value;

projeto.autor =
document.getElementById("autor")?.value;

projeto.subtitulo =
document.getElementById("subtitulo")?.value;

projeto.contracapa =
document.getElementById("contracapa")?.value;

alert("Dados da capa registrados.");

}


// ===============================
// ENGINE — Exportação
// ===============================

function gerarPDFMiolo(){

alert("Gerando PDF do miolo...");

}


function gerarPDFCapa(){

alert("Gerando PDF da capa...");

}


function gerarEPUB(){

alert("Gerando EPUB...");

}


// ===============================
// DEBUG STATUS
// ===============================

function statusProjeto(){

console.log(projeto);

}
