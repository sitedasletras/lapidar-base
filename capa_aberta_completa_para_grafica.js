// =======================================
// LAPIDAR BASE — CAPA ABERTA COMPLETA v1
// =======================================


// cálculo lombada 75g

function calcularLombadaCompleta(paginas){

const espessuraPagina = 0.06;

return paginas * espessuraPagina;

}


function gerarCapaAbertaCompleta(){


if(typeof window.jspdf === "undefined"){

alert("Biblioteca PDF não carregada.");

return;

}


if(!projeto.totalCaracteres){

alert("Arquivo não carregado.");

return;

}


const paginas =
estimarPaginas(projeto.totalCaracteres);


const lombada =
calcularLombadaCompleta(paginas);


const larguraLivro = 148;

const orelha = 70;


const larguraTotal =
(orelha * 2) +
(larguraLivro * 2) +
lombada;


const alturaLivro = 210;


const { jsPDF } = window.jspdf;


const doc = new jsPDF({

unit: "mm",

format: [larguraTotal, alturaLivro]

});


// CONTRACAPA

doc.setFont("Times","Normal");

doc.setFontSize(12);

doc.text(

projeto.contracapa || "Texto contracapa",

20,

40,

{

maxWidth: 108,

align:"justify"

}

);


// LOMBADA

doc.setFont("Times","Bold");

doc.setFontSize(14);

doc.text(

projeto.titulo || "Título",

orelha + larguraLivro + (lombada/2),

105,

{

align:"center",

angle:90

}

);


// CAPA

doc.setFont("Times","Bold");

doc.setFontSize(24);

doc.text(

projeto.titulo || "Título",

larguraTotal - larguraLivro + 74,

110,

{

align:"center"

}

);


doc.setFontSize(14);

doc.text(

projeto.autor || "Autor",

larguraTotal - larguraLivro + 74,

170,

{

align:"center"

}

);


doc.save("capa_aberta_lapidar_base.pdf");

}
