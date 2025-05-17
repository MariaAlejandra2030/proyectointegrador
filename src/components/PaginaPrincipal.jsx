import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NuevaClase from "../components/NuevaClase";
import "../components/NuevaClase.css";

function PaginaPrincipal({setmostrarmodal}) {
  
  const navigate = useNavigate(); // CREA EL NAVEGADOR


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
          <a href="#" onClick={(e) => { e.preventDefault()
            setmostrarmodal(true)}} className="link">
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
        
            <div className="avatar"></div>
            <a
  href="#"
  className="cerrar"
  onClick={(e) => {
    e.preventDefault();
    navigate("/"); // Redirige a la página principal (login)
  }}
>
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

      
    </div>
  );
}

export default PaginaPrincipal;
