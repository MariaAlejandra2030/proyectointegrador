import { useState } from "react";
import Cuadros from "../components/Cuadros";
import Eliminar from "../components/Eliminar"; // IMPORTA EL COMPONENTE DEL MODAL
import Footer from "../components/Footer";
import NuevaClase from "../components/NuevaClase"; // IMPORTA EL COMPONENTE DEL MODAL
import "../components/NuevaClase.css";
import PaginaPrincipal from "../components/PaginaPrincipal";
import info from "../helpers/info";
import "./ContenidoPrincipal.css";
import Modificar from "../components/Modificar";

function ContenidoPrincipal() {
  const [mostrarModal, setMostrarModal] = useState(false); // ESTADO PARA CONTROLAR EL MODAL de nueva clase
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false); // ESTADO PARA CONTROLAR EL MODAL de eliminaar
  const [listaclases, setListaClases] = useState(info); // ESTADO PARA ALMACENAR LAS CLASES
  const [id, setId] = useState(null); // ESTADO PARA ALMACENAR EL ID DE LA CLASE A ELIMINAR
  const [modificarModal, setModificarModal] = useState(false); // ESTADO PARA CONTROLAR EL MODAL de modificar
  return (
    <>
      <PaginaPrincipal
        setmostrarmodal={setMostrarModal}
        setListaClases={setListaClases}
        listaclases={listaclases}
        setMostrarModalEliminar={setMostrarModalEliminar}
        setId={setId} // PASA LA FUNCIÓN PARA ESTABLECER EL ID A ELIMINAR
        setModificarModal={setModificarModal} // PASA LA FUNCIÓN PARA ESTABLECER EL MODAL DE MODIFICAR
      />
      {mostrarModal && (
        <div className="overlay">
          <NuevaClase
            cerrar={setMostrarModal}
            setListaClases={setListaClases}
          />
        </div>
      )}

      {mostrarModalEliminar && (
        <div className="overlay">
          <Eliminar
            cerrar={setMostrarModalEliminar}
            setListaClases={setListaClases}
            id={id} // PASA EL ID DE LA CLASE A ELIMINAR
          />
        </div>
      )}

      {modificarModal && (
        <div className="overlay">
          <Modificar
            cerrar={setModificarModal}
            setListaClases={setListaClases}
            claseModificar={listaclases.find((c) => c.id === id)} // <--- Aquí accedes a los datos reales
          />
        </div>
      )}

      <Footer />
    </>
  );
}

export default ContenidoPrincipal;
