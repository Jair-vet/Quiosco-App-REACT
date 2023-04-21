export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: "USD"
    })
}

export const formatearFecha = (fecha) => {

    let nuevaFecha;

    if (fecha.includes("T00:00:00.000Z")) {
      nuevaFecha = new Date(fecha.split("T")[0].split("-"));
    } else {
      nuevaFecha = new Date(fecha);
    }

    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    
    return nuevaFecha.toLocaleDateString("es-ES", opciones);
};

