import { useEffect, useRef, useState } from "react";
import { CgSoftwareUpload } from "react-icons/cg";
import { useParams } from "react-router-dom";
import { ButtonCard } from "../ui";
import { Clothes } from "../../types/ropa";

export function SelectPost({ clothes,  setImage }: {clothes: Clothes[], setImage: React.Dispatch<React.SetStateAction<string>>}){
    // localizacion actual
    let { IdPrenda } = useParams();
    // variables de estado
    const [url, setUrl] = useState('');
    // referencia al input
    const fileInputRef = useRef<HTMLInputElement>(null);
    // funcion de accion al hacer click en el boton
    const handleClick = () => {
        fileInputRef.current?.click();
    };
    // funcion de accion al seleccionar un archivo
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            setImage(URL.createObjectURL(files[0]));
        }
    };
    
    // evaluar estado de la pagina
    useEffect(() => {
        // recorremos la lista de prendas de ropa
        clothes.map( c => {
            // si la imagen de la prenda de ropa es igual a la imagen seleccionada
            if(IdPrenda?.includes(c.type)){
                setUrl(c.image);
            }
        });
    },[clothes]);
    // construccion del componente
    return(
        <>
            {/**boton en forma de carta, que recibira un evento de click */}
            <ButtonCard onClick={() => handleClick()}>
                {/**Entrada de la imagen que se va a publicar */}
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={e => handleFileChange(e)}
                />
                <img className="rounded-2xl object-cover size-full opacity-20" src={url} alt="imagen" />
                {/**diseño de boton */}
                <div className="absolute grid items-center justify-center sm:top-[30%] md:top-[30%] left-[30%] right-[30%] font-[20px]">
                    <CgSoftwareUpload className="lg:text-[90px] sm:text-[60px] bg-secondary lg:p-3 sm:p-2 rounded-full ml-2"/>
                    <span className="md:justify-between sm:justify-start sm:text-[15px] text-secondary lg:text-xl">subir diseño</span>
                </div>
            </ButtonCard>
            
        </>
    )
}