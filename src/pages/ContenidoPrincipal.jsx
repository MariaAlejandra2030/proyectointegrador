import { useState } from "react";
import Cuadros from "../components/Cuadros";
import Eliminar from "../components/Eliminar"; // IMPORTA EL COMPONENTE DEL MODAL
import Footer from "../components/Footer";
import NuevaClase from "../components/NuevaClase"; // IMPORTA EL COMPONENTE DEL MODAL
import "../components/NuevaClase.css";
import PaginaPrincipal from "../components/PaginaPrincipal";
import info from "../helpers/info";
import "./ContenidoPrincipal.css";

function ContenidoPrincipal() {
  const [mostrarModal, setMostrarModal] = useState(false); // ESTADO PARA CONTROLAR EL MODAL de nueva clase
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false); // ESTADO PARA CONTROLAR EL MODAL de eliminaar
  const [listaclases, setListaClases] = useState(info); // ESTADO PARA ALMACENAR LAS CLASES
  return (
    <>
      <PaginaPrincipal
        setmostrarmodal={setMostrarModal}
        setListaClases={setListaClases}
        listaclases={listaclases}
        setMostrarModalEliminar={setMostrarModalEliminar}
        
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
          <Eliminar cerrar={setMostrarModalEliminar} />
        </div>
      )}

      <Footer />
    </>
  );
}

export default ContenidoPrincipal;
