import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Registrate from "../pages/Registrate";

function Registro() {
    
    let redireccion = useNavigate();

     function iniciarSesion() {
    
        // Redirigimos a la página de Login
        redireccion("/Login");  // Aquí solo usamos redireccion directamente
      }


    
    
  return (
    <div className="container">
      <div className="form_back">
        <img
          className="LogoInicio"
          src="/public/01 Welcome-to-Doit.png"
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
        <input type="text" className="input" placeholder="Nombre completo" />
        <input type="text" className="input" placeholder="Email" />
        <input type="text" className="input" placeholder="Password" />
        <input type="text" className="input" placeholder="Confirm Password" />
        <Button text={"Registrate"} />

        <span className="switch">
          Already have an account?
          <label onClick={iniciarSesion} for="signup_toggle" className="signup_tog">
            Sign In 
          </label>
        </span>
      </div>
    </div>
  );
}

export default Registro;
