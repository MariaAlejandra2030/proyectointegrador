import React, { useState } from "react";
import Cuadros from "../components/Cuadros";
import PaginaPrincipal from "../components/PaginaPrincipal";
import "./ContenidoPrincipal.css";
import Footer from "../components/Footer";
import "../components/NuevaClase.css";
import info from "../helpers/info";
import NuevaClase from "../components/NuevaClase"; // IMPORTA EL COMPONENTE DEL MODAL
import Eliminar from "../components/Eliminar"; // IMPORTA EL COMPONENTE DEL MODAL

function ContenidoPrincipal() {
  const [mostrarModal, setMostrarModal] = useState(false); // ESTADO PARA CONTROLAR EL MODAL de nueva clase
  const [mostrarModalEliminar, setMostrarModalEliminar] = useState(false); // ESTADO PARA CONTROLAR EL MODAL de eliminaar
  return (
    <>
      <PaginaPrincipal setmostrarmodal={setMostrarModal} />

      <div className="grid">
        {
          /* <Cuadros /> */
          info.map((item, index) => {
            console.log(index)
            return <Cuadros
              key={index}
              aula={item.aula}
              nivel={item.nivel}
              hora={item.hora}
              descripcion={item.descripcion}
            setmostrarmodaleliminar={setMostrarModalEliminar} // PASA LA FUNCIÓN AL COMPONENTE
            />
          })
        }
      </div>
      {mostrarModal && (
        <div className="overlay">
          <NuevaClase cerrar={setMostrarModal} />
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
