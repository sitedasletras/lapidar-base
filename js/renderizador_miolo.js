// =======================================
// LAPIDAR BASE — RENDERIZADOR DO MIOLO v1
// =======================================


function renderizarPaginaTeste(){

const area =
document.getElementById("pagina_preview");

if(!area) return;


area.style.width = "148mm";
area.style.height = "210mm";

area.style.margin = "auto";

area.style.paddingTop =
layoutEditorial.margemSuperior + "mm";

area.style.paddingBottom =
layoutEditorial.margemInferior + "mm";

area.style.paddingLeft =
layoutEditorial.margemInterna + "mm";

area.style.paddingRight =
layoutEditorial.margemExterna + "mm";


area.style.fontFamily =
layoutEditorial.fonte;

area.style.fontSize =
layoutEditorial.tamanhoFonte + "pt";

area.style.lineHeight =
layoutEditorial.entrelinha;


area.innerText =
"Prévia diagramada do manuscrito conforme configuração editorial.";

}
