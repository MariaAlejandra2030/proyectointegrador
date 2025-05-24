import Home from '../Home'
import Login from '../pages/Login'
import Principal from '../pages/Principal'
import ContenidoPrincipal from '../pages/ContenidoPrincipal'
import Cuadros from '../components/Cuadros'
import Footer from '../components/Footer'
import NuevaClase from '../components/NuevaClase'
import ContenidoPrincipalEstudiante from '../pages/ContenidoPrincipalEstudiante'
import Registro from '../components/Registro'

export let enrutador = [
    {
        path: '/',
        element: <Principal />
    },
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },

    {
        path: '/Registrate',
        element: <Registro />
    },

    {
        path: '/ContenidoPrincipal',
        element: <ContenidoPrincipal />
    },

    {
        path: '/Cuadros',
        element: <Cuadros />
    },

    {
        path: '/Footer',
        element: <Footer />
    },
    {
        path: '/NuevaClase',
        element: <NuevaClase />
    },
    {
        path: '/ContenidoPrincipalEstudiante',
        element: <ContenidoPrincipalEstudiante />
    }



]


