import Home from '../Home'
import Login from '../pages/Login'
import Principal from '../pages/Principal'
import ContenidoPrincipal from '../pages/ContenidoPrincipal'
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
        path: '/Registrate',
        element: <Registro />
    },

    {
        path: '/ContenidoPrincipal',
        element: <ContenidoPrincipal />
    },

    
    {
        path: '/ContenidoPrincipalEstudiante',
        element: <ContenidoPrincipalEstudiante />
    }



]


