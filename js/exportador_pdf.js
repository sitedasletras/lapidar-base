// =======================================
// LAPIDAR BASE — EXPORTADOR PDF v1
// =======================================


// usa biblioteca jsPDF

function gerarPDFMioloReal(){

if(typeof window.jspdf === "undefined"){

alert("Biblioteca PDF não carregada.");

return;

}

const { jsPDF } = window.jspdf;

const doc = new jsPDF({

unit: "mm",
format: "a5"

});

doc.setFont("Times", "Normal");

doc.setFontSize(12);

doc.text(

"Prévia diagramada conforme configuração editorial.",

20,

30

);

doc.save("miolo_lapidar_base.pdf");

}
