import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Input } from "../components/ui";
import { Reenvio } from "../components/form/Reenvio";

export function Login(){
    //variables globales del programa
    const { setUser, setIsAuthenticated } = useContext(AuthContext);
    // variable de estado
    const [inputVal, setInputVal] = useState({
        email: '',
        password: ''
      });
    //asignacion de los valores de entrada
    const setVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputVal(() => {
        return{
            ...inputVal,
            [name]: value
        }
        });
    }
    // funcion peticion a la base de datos
    const handleClick = () => {
        //peticion a la base de datos
        const data = {
            id: 1425,
            first_name: 'Gilberto',
            last_name: 'Ojeda',
            phone: 4144567782,
            email: 'gilbertojeda30@gmail.com',
            date_birth: '28-12-2000',
            picture: '',
            password: '123',
            date_create: '16-10-2024',
        };
        //validacion de datos
        if(inputVal.email === data.email && inputVal.password === data.password){
            setUser(data);
            setIsAuthenticated(true);
        }else if(inputVal.email.length > 0 && inputVal.email != data.email){
            alert('email incorrecto!');
        } else if(inputVal.password.length > 0 && inputVal.password != data.password){
            alert('contraseña incorrecta!');
        }
    }
    
    return (
        <div className="relative object-cover md:max-w-lg md:mb-32 sm:items-center sm:text-center sm:mb-16 sm:w-[80%] mx-auto">
            {/**Titulo de la pagina */}
            <div className="bg-secondary mx-[20%] rounded-3xl">
                <h1 className="text-new-white font-bold text-[35px] text-center my-10">Iniciar  Sesión</h1>
            </div>
            {/**formulario del login */}
            <Input name="email" type="email" placeholder="Nombre de usuario o correo electronico" onChange={e => setVal(e)} value={inputVal.email} required />
            <Reenvio className="text-end" parrafo="¿Olvidaste tu contraseña?" textLink="Haz click aqui"/>
            <Input name="password" type="password" placeholder="Contraseña" onChange={e => setVal(e)} value={inputVal.password} required />
            <Reenvio parrafo="¿No tienes cuenta?" textLink="Registrate aqui"/>
            <button 
             type="button" 
             onClick={handleClick}
             className="my-8 font-medium rounded-lg md:text-sm md:w-auto md:px-12 sm:text-lg sm:w-full sm:py-3 md:py-2.5 text-primary bg-new-white hover:bg-white focus:ring-2 focus:ring-light-secondary active:text-light-secondary">
                Ingresar
            </button>
        </div>
    );
}