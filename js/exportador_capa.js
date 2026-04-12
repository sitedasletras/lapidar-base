// =======================================
// LAPIDAR BASE — EXPORTADOR CAPA v1
// =======================================

function gerarPDFCapaReal(){

if(typeof window.jspdf === "undefined"){

alert("Biblioteca PDF não carregada.");

return;

}

const { jsPDF } = window.jspdf;

const doc = new jsPDF({

unit: "mm",
format: [210, 297]

});


const titulo = projeto.titulo || "Título";
const autor = projeto.autor || "Autor";
const subtitulo = projeto.subtitulo || "";


doc.setFont("Times", "Bold");
doc.setFontSize(24);

doc.text(titulo, 105, 120, { align: "center" });

doc.setFont("Times", "Normal");
doc.setFontSize(16);

doc.text(subtitulo, 105, 140, { align: "center" });

doc.setFontSize(14);

doc.text(autor, 105, 200, { align: "center" });


doc.save("capa_lapidar_base.pdf");

}
