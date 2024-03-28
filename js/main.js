// Solicitar al usuario los días del mes, los días francos y el costo por hora
let diasDelMes = Number(prompt(`Días que tiene el mes`));
let francos = Number(prompt(`Días francos que tiene el mes`));
let precioHora = Number(prompt(`Costo por hora`));

// Calcular los días trabajados restando los días francos del total de días del mes
let diasTrabajados = diasDelMes - francos;

// Calcular el sueldo total multiplicando los días trabajados por el número de horas trabajadas por día y el precio por hora
const HORAS_POR_DIA = 12;
const PRECIO_POR_HORA = 2170;
let totalSueldo = diasTrabajados * HORAS_POR_DIA * precioHora;

// Mostrar los resultados en elementos HTML con los ids "casilla1", "casilla2", "casilla3" y "casilla4"
const contenedor1 = document.getElementById("casilla1");
contenedor1.innerHTML = `<h5>Días que tiene el mes: ${diasDelMes}</h5>`;

const contenedor2 = document.getElementById("casilla2");
contenedor2.innerHTML = `<h5>Francos totales: ${francos}</h5>`;

const contenedor3 = document.getElementById("casilla3");
contenedor3.innerHTML = `<h5>Días trabajados: ${diasTrabajados}</h5>`;

const contenedor4 = document.getElementById("casilla4");
contenedor4.innerHTML = `<h5>Total del sueldo a ganar: ${totalSueldo}</h5>`;