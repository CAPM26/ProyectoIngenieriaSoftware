function mostrarDetalle(id) {
    // Ocultar todos los detalles
    document.querySelectorAll('.detalle-servicio').forEach(detalle => {
        if (detalle.id !== id) {
            detalle.style.display = "none";
        }
    });

    // Obtener el elemento del detalle seleccionado
    const detalle = document.getElementById(id);

    // Alternar la visibilidad del detalle seleccionado
    if (detalle.style.display === "block") {
        detalle.style.display = "none";
    } else {
        detalle.style.display = "block";
    }
}
function mostrarDetalle(id) {
    // Ocultar todos los detalles
    document.querySelectorAll('.detalle-servicio').forEach(detalle => {
        if (detalle.id !== id) {
            detalle.style.display = "none";
        }
    });

    // Obtener el elemento del detalle seleccionado
    const detalle = document.getElementById(id);

    // Alternar la visibilidad del detalle seleccionado
    if (detalle.style.display === "block") {
        detalle.style.display = "none";
    } else {
        detalle.style.display = "block";
    }
}