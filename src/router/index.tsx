import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Layouts } from "../pages/Layouts";
//Paginas
import { SendPost, Inicio, Login, TypePost, MyUser } from "../pages";
// imagenes de ropa genericos
import imgFranela from '../assets/franela.jpeg'
import imgJogger from '../assets/joggers.jpeg'
import imgShorts from '../assets/shorts.jpeg'
import imgZapatos from '../assets/zapatos.jpeg'
import imgMedias from '../assets/medias.jpeg'

export default function Router(){
    //base de datos de la ropa
    const clothes = [
        { type: 'franelas', image: imgFranela},
        { type: 'joggers', image: imgJogger},
        { type: 'shorts', image: imgShorts},
        { type: 'zapatos', image: imgZapatos},
        { type: 'medias', image: imgMedias},
    ]
    //variables globales del programa
    const { isAuthenticated, authState } = useContext(AuthContext);
    //evaluacion del estado de la cuenta
    useEffect(() => {  
        authState();
        console.log(isAuthenticated);
    }, [isAuthenticated]);

    //construccion de las rutas
    return (
        <Routes>
            {isAuthenticated
                    ? 
                (/**Si esta logeado puede acceder a las rutas de la app */
                <Route element={<Layouts />}>
                    <Route path="/home" element={<Inicio />} />
                    <Route path="/user" element={<MyUser />} />
                    <Route path="/add" element={<TypePost clothes={clothes}/>} />
                    <Route path="/add/:IdPrenda" element={<SendPost clothes={clothes}/>} />
                    <Route path="/*" element={<p className="text-light-gray font-bold text-5xl text-center mt-11">Not found</p>}/>
                </Route>)
                    :
                (/**si no esta logeado solo puede acceder a la ruta del login */
                <Route path="/login" element={<Login />} />)}
        </Routes>
    );
}