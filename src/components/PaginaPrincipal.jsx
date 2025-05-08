import { useState } from "react";
import NuevaClase from "../components/NuevaClase";
import "../components/NuevaClase.css";

function PaginaPrincipal() {
  const [mostrarModal, setMostrarModal] = useState(false);

  const [clases, setClases] = useState([]);
  const eliminarTodasLasClases = () => {
    setClases([]); // Vacía el arreglo
  };

  return (
    <div className="container-principal">
      <header className="header">
        <div className="logo-titulo">
          <img
            className="LogoInicio"
            src="/public/logotipo-doit.png"
            alt="Logo"
          />
          <h2 className="titulo">Hey Teacher</h2>
        </div>

        <div className="acciones">
          <a href="#" onClick={() => setMostrarModal(true)} className="link">
            Nueva clase
          </a>
          <a
            href="#"
            className="link"
            onClick={(e) => {
              e.preventDefault(); // evita que la página se recargue
              eliminarTodasLasClases(); // llama la función
            }}
          >
            Eliminar todas las clases
          </a>

          <div className="perfil">
            <span className="nombre">Andrés Tobón</span>
            <div className="avatar"></div>
            <a href="#" className="cerrar">
              Cerrar sesión
            </a>
          </div>
        </div>
      </header>

      <h3 className="subtitulo">Gestión de horarios maestros</h3>

      <main className="horarios">
        <div className="dias">
          <div className="dia">Lunes</div>
          <div className="dia">Martes</div>
          <div className="dia">Miércoles</div>
          <div className="dia">Jueves</div>
          <div className="dia">Viernes</div>
          <div className="dia">Sábado</div>
        </div>
      </main>

      {mostrarModal && (
        <div className="overlay">
          <NuevaClase cerrar={setMostrarModal} />
        </div>
      )}
    </div>
  );
}

export default PaginaPrincipal;
