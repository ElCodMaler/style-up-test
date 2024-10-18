import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { ButtonC } from "../components/ui";

export function MyUser(){
    //
    const { user, setIsAuthenticated, setUser } = useContext(AuthContext);
    //deslogearse
    const handleLogout = () => {
      setIsAuthenticated(false);
      setUser({
        first_name: '',
        last_name: '',
        phone: 0,
        email: '',
        date_birth: '',
        picture: '',
        password: '',
        date_create: '',
    });
    localStorage.removeItem('authState');
    }

    return (
        <>
          {/**Titulo de la pagina */}
          <div className="bg-secondary mx-[20%] rounded-3xl">
            <h1 className="text-new-white font-bold text-[35px] text-center my-10">Usuario</h1>
          </div>
          {/**informacion del usuario */}
          <ButtonC onClick={() => handleLogout()}>
            {user.first_name} {user.last_name}
          </ButtonC>
        </>
    );
}