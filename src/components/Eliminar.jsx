function Eliminar({ cerrar, setListaClases, id }) {
 
 const actualizarListaClases = (itemId) => {
    setListaClases((prev) => prev.filter((c) => c.id !== itemId));
    cerrar(false);
  };

  return (
    <div className="modal">
      <h2>¿Quieres eliminar la clase?</h2>
      <button onClick={()=>{actualizarListaClases(id)}}>Eliminar</button>
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
  );
}
export default Eliminar;
