import Swal from 'sweetalert2'

export function alertaRedireccion(mensaje, url, redireccion) {
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: "Será redireccionado en unos minutos.",
        timer: 5000,
        icon: "success",
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

export function alertaError(titulo, mensaje,icono) {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono
      });

}

export function generaToken(){
    return "token-"+ Math.random().toString(36).substring(2,10) + "-" + Math.random().toString(36).substring(2,10)            




}