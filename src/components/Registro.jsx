import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { alertaError } from "../helpers/funciones";

const apiUsuarios = "https://back-json-server-sabado.onrender.com/usuarios/";

function Registro() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const redireccion = useNavigate();

  function obtenerUsuarios() {
    fetch(apiUsuarios)
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuarios obtenidos:", data);
        setUsuarios(data);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  }

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  function iniciarSesion() {
    redireccion("/Login");
  }

  function RegistrarUsuario() {
    const usuarioExistente = usuarios.find(
      (item) =>
        item.usuario === getUsuario || item.correo === getEmail
      
    );

    if (usuarioExistente) {
      alertaError("Error", "Usuario ya existe en la base de datos", "Error");
    } else {
      fetch(apiUsuarios, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: getUsuario,
          password: getPassword,
          nombre: getName,
          correo: getEmail,
        }),
      })
        .then(() => {
          console.log("Registro Exitoso");
          obtenerUsuarios();
        })
        .catch((error) => {
          console.error("Error al registrar usuario:", error);
        });
    }
  }

  return (
    <div className="container">
      <div className="form_back">
        <img
          className="LogoInicio"
          src="/01 Welcome-to-Doit.png"
          alt="Logo"
        />
        <div className="form_details">SignUp</div>

        <select className="input" defaultValue="">
          <option value="" disabled>
            Tipo de documento
          </option>
          <option value="Cedula">Cédula de ciudadania</option>
          <option value="Cedula">Cédula de extranjeria</option>
        </select>

        <input
          type="number"
          className="input"
          placeholder="Número de documento"
          maxLength={10}
          onInput={(e) => {
            if (e.target.value.length > 10) {
              e.target.value = e.target.value.slice(0, 10);
            }
          }}
        />

        {/* ✅ Este es el único input de nombre que queda */}
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="input"
          placeholder="Nombre completo"
        />

        <input
          onChange={(e) => setUsuario(e.target.value)}
          type="text"
          className="input"
          placeholder="Usuario"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="input"
          placeholder="Email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="Password"
        />

        <Button type="button" onClick={RegistrarUsuario} text="Registrate" />

        <span className="switch">
          Already have an account?
          <label
            onClick={iniciarSesion}
            htmlFor="signup_toggle"
            className="signup_tog"
          >
            Sign In
          </label>
        </span>
      </div>
    </div>
  );
}

export default Registro;
