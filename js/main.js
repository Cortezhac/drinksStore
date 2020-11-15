
function mostrarVentana(elemento){
    let ventana = document.getElementById("ventana");
    let clase = ventana.className;
    ventana.className = clase === "order" ? "order-show" : "order";
}