import "../components/NuevaClase.css";

function Cuadros({
  dia,
  aula,
  horaInicio,
  horaFinal,
  nivel,
  grupo,
  clase,
  setmostrarmodaleliminar,
}) {
  // ESTADO PARA CONTROLAR EL MODAL

  return (
    <>
      <div>
        <div className="card">
          <div className="card-header rojo">{aula}</div>
          <div className="card-sub">{nivel} - {grupo}</div>
          <div className="card-hora">
            {dia} | {horaInicio} - {horaFinal}
          </div>
          <div className="card-contenido">{clase}</div>
          <div className="card-acciones">
            <a href="#">Modificar</a>{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
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
