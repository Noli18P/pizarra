//Obtenemos el contexto y el elemento HTML
var area = document.getElementById("pizarron");
var lienzo = area.getContext("2d");

//Damos un evento al click del mouse
document.addEventListener("mousedown", mouseC);
document.addEventListener("mouseup", mouseU);
var x, y;

function mouseC(click) {
    x = click.layerX;
    y = click.layerY;
}

function mouseU(soltar) {
    Dibujar(x - 15, y - 15, soltar.layerX - 13, soltar.layerY - 15);
}

//Creamos la funcion para dibujar
function Dibujar(x_i, y_i, x_f, y_f) {
    lienzo.strokeStyle = "white";
    lienzo.lineWidth = 5;
	lienzo.beginPath();
	lienzo.moveTo(x_i, y_i);
	lienzo.lineTo(x_f, y_f);
	lienzo.stroke();
	lienzo.closePath();
}
