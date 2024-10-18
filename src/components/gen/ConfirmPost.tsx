import { useNavigate } from "react-router-dom";
import { Input, Card } from "../ui";

export function ConfirmPost({image}: {image: string}){
    // navegacion
    const navigate = useNavigate();
    // funcion de accion al hacer click en el boton
    const handleClick = () => {
        navigate('/home');
    };
    // construccion del componente
    return (
        <>  
            {/**boton en forma de carta, que recibira un evento de click */}
            <Card>
                <img className="rounded-2xl object-cover size-full" src={image} alt="imagen" />
            </Card>
            {/** entrada de la descripcion del post */}
            <Input type="text" placeholder="Escribir pie del post"/>
            {/** guardar post en galeria */}
            <a href="#" className={`sm:m-4 lg:m-11 text-light-secondary hover:text-light-gray`}>Guardar borrador</a>
            {/** publicar post */}
            <button type="submit" className='sm:text-lg px-6 py-3 sm:rounded-lg lg:text-xl lg:rounded-2xl bg-secondary text-light-gray hover:bg-light-secondary'
             onClick={() => handleClick()}
            >
                Publicar
            </button>
        </>
    );
}