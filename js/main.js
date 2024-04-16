document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    let diasDelMes = parseInt(document.getElementById("diasMes").value);
    let francos = parseInt(document.getElementById("diasFrancos").value);
    let precioHora = parseFloat(document.getElementById("costoHora").value);

    let diasTrabajados = diasDelMes - francos;

    const HORAS_POR_DIA = 12;
    let totalSueldo = diasTrabajados * HORAS_POR_DIA * precioHora;

    totalSueldo = totalSueldo.toLocaleString('es-ES', { minimumFractionDigits: 2 });

    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = `
        <h5>Días que tiene el mes: ${diasDelMes}</h5>
        <h5>Francos: ${francos}</h5>
        <h5>Días trabajados: ${diasTrabajados}</h5>
        <h5>Horas trabajadas: ${diasTrabajados * HORAS_POR_DIA}</h5>
                <h5 class="sueldo">Sueldo: ${totalSueldo}</h5>
    `;
});

console.log(totalSueldo);

