// =======================================
// LAPIDAR BASE — EXPORTADOR ORELHAS v1
// =======================================


// largura padrão editorial comum: 70 mm

const larguraOrelha = 70;
const alturaLivro = 210; // A5


function gerarPDFOrelhaDianteira(){

if(typeof window.jspdf === "undefined"){

alert("Biblioteca PDF não carregada.");

return;

}

const { jsPDF } = window.jspdf;

const doc = new jsPDF({

unit: "mm",
format: [larguraOrelha, alturaLivro]

});


const textoOrelha =
projeto.subtitulo ||
"Texto da orelha dianteira não informado.";


doc.setFont("Times", "Normal");

doc.setFontSize(12);

doc.text(

textoOrelha,

10,

30,

{

maxWidth: 50,
align: "justify"

}

);


doc.save("orelha_dianteira_lapidar_base.pdf");

}



function gerarPDFOrelhaTraseira(){

if(typeof window.jspdf === "undefined"){

alert("Biblioteca PDF não carregada.");

return;

}

const { jsPDF } = window.jspdf;

const doc = new jsPDF({

unit: "mm",
format: [larguraOrelha, alturaLivro]

});


const textoAutor =
projeto.autor ||
"Biografia do autor não informada.";


doc.setFont("Times", "Normal");

doc.setFontSize(12);

doc.text(

textoAutor,

10,

30,

{

maxWidth: 50,
align: "justify"

}

);


doc.save("orelha_traseira_lapidar_base.pdf");

}
