function Eliminar({ cerrar }) {
  return (
    <div>
      <div class="modal">
        <h2> ¿Quieres eliminar la clase del aula 01?</h2>

        <button>Eliminar</button>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cerrar(false);
          }}
        >
          Cancelar
        </a>
      </div>
    </div>
  );
}

export default Eliminar;
