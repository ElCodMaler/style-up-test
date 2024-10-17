import { useState } from "react";
import { Clothes } from "../types/ropa";
import { SelectPost, ConfirmPost } from "../components/gen";

export function SendPost({ clothes }: {clothes: Clothes[]}){
    // estado para asignar imagen
    const [image, setImage] = useState('');
    // construccion del componente
    return (
        <>
        {/**formulario del post */}
        <form className="relative object-cover md:max-w-lg md:w-[50%] sm:items-center sm:text-center sm:mb-16 sm:w-[80%] mx-auto">
            {/**Titulo del la pagina */}
            <div className="bg-secondary mx-[20%] rounded-3xl">
                <h1 className="text-new-white font-bold text-[35px] text-center my-10">Subir diseño</h1>
            </div>
            {/** si existe una imagen asignada para el post nos vamos a la confimacion del post */
                image.length > 0
                    ? 
                <ConfirmPost image={image} />
                    :
                <SelectPost clothes={clothes} setImage={setImage}/>
            }
        </form>
        </>
    );
}