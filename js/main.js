let diasDelMes = Number(prompt(`Dias que tiene el mes`));
let francos = Number(prompt(`Francos que tiene el mes`));
let precioHora = Number(prompt(`Costo por hora`));

let diasTrabajados = diasDelMes - francos;
let totalSueldo = diasTrabajados * 12 * 2170;

console.log(`Dias que tiene el mes: ${diasDelMes}`);
console.log(`francos totales: ${francos}`);
console.log(`Dias trabajados: ${diasTrabajados}`);
console.log(`Total del sueldo a ganar: ${totalSueldo}`);