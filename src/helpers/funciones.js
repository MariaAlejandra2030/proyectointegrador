import Swal from "sweetalert2";

/**
 * Muestra una alerta con SweetAlert2 indicando que será redireccionado en unos minutos,
 * y luego redirige a la URL especificada si el parámetro de redirección es verdadero.
 *
 * @param {string} mensaje - El mensaje que se mostrará como título en la alerta.
 * @param {string} url - La URL a la que se redirigirá después de que termine el temporizador.
 * @param {boolean} redireccion - Indica si se debe realizar la redirección al finalizar el temporizador.
 * @param {number} timer - El tiempo en milisegundos antes de que se redirija automáticamente.
 */
export function alertaRedireccion(
  mensaje,
  url = "/",
  redireccion = true,
  timer = 2000
) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "Será redireccionado en unos minutos.",
    timer: timer,
    icon: "success",
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      if (redireccion) {
        window.location.href = url;
      }
    }
  });
}

export function alertaError(titulo, mensaje, icono, textoBoton = "OK") {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    confirmButtonText: textoBoton,
  });
}

export function generaToken() {
  return (
    "token-" +
    Math.random().toString(36).substring(2, 10) +
    "-" +
    Math.random().toString(36).substring(2, 10)
  );
}
