document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores de los campos de entrada
    let diasDelMes = parseInt(document.getElementById("diasMes").value);
    let francos = parseInt(document.getElementById("diasFrancos").value);
    let precioHora = parseFloat(document.getElementById("costoHora").value);

    // Calcular los días trabajados restando los días francos del total de días del mes
    let diasTrabajados = diasDelMes - francos;

    // Calcular el sueldo total multiplicando los días trabajados por el número de horas trabajadas por día y el precio por hora
    const HORAS_POR_DIA = 12;
    let totalSueldo = diasTrabajados * HORAS_POR_DIA * precioHora;

    // Formatear el totalSueldo con separador de miles y coma decimal
    totalSueldo = totalSueldo.toLocaleString('es-ES', { minimumFractionDigits: 2 });

    // Mostrar los resultados en el elemento con el id "resultado"
    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = `
        <h5>Días que tiene el mes: ${diasDelMes}</h5>
        <h5>Francos: ${francos}</h5>
        <h5>Días trabajados: ${diasTrabajados}</h5>
        <h5>Horas trabajadas: ${diasTrabajados * HORAS_POR_DIA}</h5>
        <h5 class="sueldo">Sueldo: ${totalSueldo}</h5>
    `;
});
