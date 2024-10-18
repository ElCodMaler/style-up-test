import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Clothes } from "../../types/ropa";

export const CardSelector: React.FC<{clothes: Clothes}> = ({clothes}) => {
    //funcion de navegacion
    const navigate = useNavigate();
    //funcion para el evento del boton
    const handledSubmit = () => {
        navigate(`${clothes.type}`);
    }
    //construccion del componente
    return (
        <button
         className="relative lg:max-w-lg lg:h-[260px] lg:w-[350px] lg:mb-32 lg:hover:bg-light-gray sm:w-[80%] sm:h-[200px] sm:mb-16 bg-new-white rounded-t-2xl shadow text-new-white mx-auto"
         onClick={() => handledSubmit()}>
            {/**Imagen de fondo */}
            <img className="rounded-t-2xl object-cover size-full opacity-20" src={clothes.image} alt="imagen" />
            {/**diseño de boton */}
            <div className="absolute grid items-center justify-center sm:top-[30%] md:top-[30%] left-[30%] right-[30%] font-[20px] text-secondary">
                <HiPlus className="text-[40px] ml-5 rounded-full"/>
                <span className="md:justify-between sm:justify-start mb-0 sm:text-[15px]">subir diseño</span>
            </div>
            {/**Titulo del boton */}
            <section className="grid md:pb-12 md:pt-3 h-[200px] rounded-b-2xl justify-center items-center sm:h-9 md:h-6 bg-secondary">
                <span className="font-sans text-center md:text-lg sm:text-lg">{clothes.type}</span>
            </section>
        </button>
    );
}