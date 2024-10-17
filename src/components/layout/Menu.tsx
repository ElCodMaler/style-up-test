import { RiHome3Fill, RiChatNewFill, RiUser3Fill } from "react-icons/ri";
import { HiSearch, HiPlus } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export function Menu(){
    //constantes base
    const sizeBase = "sm:size-[28px] md:size-[28px] lg:size-[32px]";
    const sizeLarge = "sm:size-[30px] md:size-[30px] lg:size-[36px]";
    const navigate = useNavigate();
    const location = useLocation();
    //selectores de estado
    const [selection, setSelection] = useState('');
    const [focus, setFocus] = useState('');
    //iconos del menu
    const menus = [
        { title: "Home", icon: RiHome3Fill },
        { title: "Chat", icon: RiChatNewFill },
        { title: "Add", icon: HiPlus },
        { title: "Search", icon: HiSearch },
        { title: "User", icon: RiUser3Fill },
    ]
    //funcion de los botones
    const handleSelect = (title: string) => {
        setSelection(title);
        navigate(`/${title.toLowerCase()}`);
    }
    // evaluar el estado de las rutas
    // si la ruta base existe en el lsitado de botones, entonces se matendra seleccionado
    useEffect(() => {
        menus.map(m => {
            if (location.pathname.includes(m.title.toLowerCase())) {
                setSelection(m.title);
            }
        })
    }, [navigate]);
        
    //construccion del menu
    return (
        <menu className="fixed md:z-0 md:w-1/5 md:h-screen md:border-r-[0.05px] sm:bottom-0 sm:left-0 sm:right-0 sm:z-50 sm:w-full sm:h-12 sm:border-t-[0.05px] bg-primary border-r-[0.05px] border-primary-gray">
            {/**contenedor del logo de style up */}
            <Logo />
            {/**contenedor de los botones del menu */}
            <ol className="sm:grid sm:h-full sm:w-full sm:grid-cols-5 sm:mx-auto md:inline-block">
                {menus.map((menu) => (
                    /**botones del menu */
                    <li key={menu.title} className={`md:justify-start sm:justify-center items-center md:mx-auto md:rounded-xl md:flex md:flex-row md:h-16 md:w-11/12 md:m-3 ms:m-2 sm:inline-flex sm:flex-col md:hover:bg-light-primary cursor-pointer ${selection === menu.title ? 'text-secondary' : 'text-light-gray'} hover:text-secondary `}
                    onMouseEnter={() => setFocus(menu.title)}
                    onMouseLeave={() => setFocus('')}
                    onClick={() => handleSelect(menu.title)}
                    >
                        {<menu.icon className={`absolute md:ml-5 ${selection === menu.title || focus === menu.title ? sizeLarge : sizeBase}`} />}
                        <span className={`md:inline lg:ml-24 md:ml-16 sm:hidden md:text-lg select-none ${ selection === menu.title ? "font-bold" : "font-sans"}`}>
                            {menu.title}
                        </span>
                    </li>
                ))}
            </ol>
        </menu>
    )
}