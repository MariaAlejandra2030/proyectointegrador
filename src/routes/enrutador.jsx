import Home from '../Home'
import Login from '../pages/Login'
import Principal from '../pages/Principal'
import Registrate from '../pages/Registrate'
import ContenidoPrincipal from '../pages/ContenidoPrincipal'

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
        element: <Registrate />
    },

    {
        path: '/ContenidoPrincipal',
        element: <ContenidoPrincipal />
    }

]


