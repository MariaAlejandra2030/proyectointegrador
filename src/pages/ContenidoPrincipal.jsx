
import Cuadros from "../components/Cuadros";
import PaginaPrincipal from "../components/PaginaPrincipal"
import "./ContenidoPrincipal.css";
import Footer from "../components/Footer"
import NuevaClase from "../components/NuevaClase";
import "../components/NuevaClase.css";


function ContenidoPrincipal() {
    return (
        <><PaginaPrincipal />
        <Cuadros />
        <Cuadros />
        <Cuadros />
        <Footer />

        </>
    )
}

export default ContenidoPrincipal