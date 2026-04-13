// =======================================
// LAPIDAR BASE — EXPORTADOR LOMBADA v1
// =======================================


// cálculo padrão para papel 75g (aprox. 0,06 mm por página)

function calcularLarguraLombada(paginas){

const espessuraPorPagina = 0.06;

return (paginas * espessuraPorPagina).toFixed(2);

}


function gerarPDFLombadaReal(){

if(typeof window.jspdf === "undefined"){

alert("Biblioteca PDF não carregada.");

return;

}

if(!projeto.totalCaracteres){

alert("Número de páginas não disponível.");

return;

}

const paginasEstimadas =
estimarPaginas(projeto.totalCaracteres);

const largura =
calcularLarguraLombada(paginasEstimadas);

const { jsPDF } = window.jspdf;

const doc = new jsPDF({

unit: "mm",
format: [largura, 210]

});


doc.setFont("Times", "Bold");

doc.setFontSize(14);

doc.text(

(projeto.titulo || "Título"),

largura / 2,

105,

{ align: "center", angle: 90 }

);


doc.save("lombada_lapidar_base.pdf");

}
