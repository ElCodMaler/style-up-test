import React from 'react'
import { useNavigate } from 'react-router-dom';
import { usuario } from '../types/usuario';

// las variables globales de la app
export type AuthContextProps = {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    user: usuario;
    setUser: React.Dispatch<React.SetStateAction<usuario>>;
    setEmail(email: string): void;
    authState: () => void;
};
// asignacion del contexto del componente
export const AuthContext = React.createContext<AuthContextProps>(null as unknown as AuthContextProps);
// Componente que almacenara las varaibles globales
const AuthProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {
    //Inicializacion de variables del usuario
    // BANDERA DEL USUARIO
    const [ isAuthenticated, setIsAuthenticated ] = React.useState(false);
    // CONSTANTE DEL USUARIO
    const [ user, setUser ] = React.useState<usuario>({
        first_name: '',
        last_name: '',
        phone: 0,
        email: '',
        date_birth: '',
        picture: '',
        password: '',
        date_create: '',
    });
    // navegacion
    const navigate = useNavigate();

    // funcion para asignar el email
    function setEmail(email: string){
        setUser((prevUser) => ({ 
            ...prevUser, 
            email: email 
        }));
    }

    //Funcion que asigna las variables al local storage
    const authState = () => {
        //Si ya existe el valor (authState) en el local storage entonces remuevelo y asignalo
        //a las variables locales de la app...
        if (localStorage.getItem('authState')) {
            // removemos el valor 'authState' del local storage
            const session = JSON.parse(localStorage.getItem('authState')!);
            // asignamos los valores en las variables globales de la app
            return(
                setIsAuthenticated(session.isAuthenticated),
                setUser(session.user)
            );
        // si ya esta autneticado entonces se envia automaticamente a la ruta del home
        } else if (isAuthenticated === true && user.email !== ''){
            navigate('/home');
            //guardamos los valores en el local storage
            return localStorage.setItem('authState', JSON.stringify({ isAuthenticated, user })); 
        }
        // si no esta logeado entonces se quedara en la ruta login
        return navigate('/login');
    };

  return (
        <AuthContext.Provider value={{ 
                                isAuthenticated,
                                user,
                                setIsAuthenticated,
                                setUser,
                                setEmail,
                                authState }}>
            {children}
        </AuthContext.Provider>
  );
}

export default AuthProvider;