import Eliminar from "./Eliminar";
import "../components/NuevaClase.css";
function Cuadros({
  id,
  dia,
  aula,
  horaInicio,
  horaFinal,
  nivel,
  grupo,
  clase,
  setMostrarModalEliminar,
  setId,
  setModificarModal,
}) {
  
  return (
    <div className="card">
      <div className="card-header rojo">{aula}</div>
      <div className="card-sub">
        {nivel} - {grupo}
      </div>
      <div className="card-hora">
        {dia} | {horaInicio} - {horaFinal}
      </div>
      <div className="card-contenido">{clase}</div>
      <div className="card-acciones">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setId(id); // Establece el ID de la clase a modificar
            setModificarModal(true);
          }}
        >
          Modificar
        </a>

        <button
          onClick={(e) => {
            e.preventDefault();
            setMostrarModalEliminar(true);
            setId(id); // Establece el ID de la clase a eliminar
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Cuadros;
