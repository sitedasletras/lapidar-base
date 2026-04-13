// =======================================
// LAPIDAR BASE — EXPORTADOR CONTRACAPA v1
// =======================================

function gerarPDFContraCapaReal(){

if(typeof window.jspdf === "undefined"){

alert("Biblioteca PDF não carregada.");

return;

}

const { jsPDF } = window.jspdf;

const doc = new jsPDF({

unit: "mm",
format: [148, 210] // A5 padrão contracapa

});


const textoContraCapa =
projeto.contracapa || "Texto da contracapa não informado.";


doc.setFont("Times", "Normal");

doc.setFontSize(12);

doc.text(

textoContraCapa,

20,

40,

{

maxWidth: 108,
align: "justify"

}

);


doc.save("contracapa_lapidar_base.pdf");

}
