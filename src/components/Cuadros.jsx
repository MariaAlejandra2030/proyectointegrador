import NuevaClase from "../components/NuevaClase";
import "../components/NuevaClase.css";
function Cuadros({ aula, nivel, hora, descripcion, setmostrarmodaleliminar  }) {
  // ESTADO PARA CONTROLAR EL MODAL

  return (
    <>
      <div>
        <div class="card">
          <div class="card-header rojo">{aula}</div>
          <div class="card-sub">{nivel}</div>
          <div class="card-hora">{hora}</div>
          <div class="card-contenido">{descripcion}</div>
          <div class="card-acciones">
            <a href="#">Modificar</a>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // evita que la página se recargue
                setmostrarmodaleliminar(true);
              }}
            >
              Eliminar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cuadros;
