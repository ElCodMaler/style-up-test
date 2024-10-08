import { RiHome3Fill, RiChatNewFill, RiUser3Fill } from "react-icons/ri";
import { HiSearch, HiPlus } from "react-icons/hi";
import { FcVip } from "react-icons/fc";
import { useState } from "react";

export function Menu(){
    //constantes base
    const sizeBase = "sm:size-[28px] md:size-[32px]";
    const sizeLarge = "sm:size-[30px] md:size-[36px]";
    //selectores de estado
    const [selection, setSelection] = useState('');
    const [sizeHome, setSizeHome] = useState(sizeBase);
    const [sizeChat, setSizeChat] = useState(sizeBase);
    const [sizeUser, setSizeUser] = useState(sizeBase);
    const [sizeSearch, setSizeSearch] = useState(sizeBase);
    const [sizePlus, setSizePlus] = useState(sizeBase);
    //iconos del menu
    const menus = [
        { title: "Home", icon: <RiHome3Fill className={sizeHome}/> },
        { title: "Chat", icon: <RiChatNewFill className={sizeChat}/> },
        { title: "Add", icon: <HiPlus className={sizePlus}/> },
        { title: "Search", icon: <HiSearch className={sizeSearch}/> },
        { title: "User", icon: <RiUser3Fill className={sizeUser}/> },
    ]
    //construccion del menu
    return (
        <menu className="fixed md:z-0 md:w-1/5 md:h-screen md:border-r-[0.05px] sm:bottom-0 sm:left-0 sm:right-0 sm:z-50 sm:w-full sm:h-12 sm:border-t-[0.05px] bg-primary border-r-[0.05px] border-primary-gray">
            {/**contenedor del logo de style up */}
            <section className="flex items-center gap-x-4 rounded-md text-sm text-light-gray p-5 mt-8 sm:hidden md:block">
                <FcVip className="size-16 sm:h-9 "/>
                <samp className="self-center text-xl font-semibold ">Style Up</samp>
            </section>
            {/**contenedor de los botones del menu */}
            <ol className="sm:grid md:inline-block md:mb-3 sm:h-full sm:w-full sm:grid-cols-5 sm:mx-auto">
                {menus.map((menu) => (
                    /**botones del menu */
                    <li key={menu.title} className="justify-center items-center md:rounded-xl md:flex md:gap-6 md:h-20 md:mb-5 ms:m-2 sm:inline-flex sm:flex-col md:hover:bg-light-primary cursor-pointer text-light-gray hover:text-secondary"
                    onPointerMove={() => {
                        if (menu.title === "Home") {
                            setSizeHome(sizeLarge);
                        }else if(menu.title === "Chat"){
                            setSizeChat(sizeLarge);
                        }else if(menu.title === "User"){
                            setSizeUser(sizeLarge);
                        }else if(menu.title === "Add"){
                            setSizePlus(sizeLarge);
                        }else if(menu.title === "Search"){
                            setSizeSearch(sizeLarge);
                        }
                    }} 
                    onPointerOut={() => {
                        if (menu.title === "Home") {
                            setSizeHome(sizeBase);
                        }else if(menu.title === "Chat"){
                            setSizeChat(sizeBase);
                        }else if(menu.title === "User"){
                            setSizeUser(sizeBase);
                        }else if(menu.title === "Add"){
                            setSizePlus(sizeBase);
                        }else if(menu.title === "Search"){
                            setSizeSearch(sizeBase);
                        }
                    }}
                    onClick={() => setSelection(menu.title)}
                    >
                        <span className={`absolute md:mr-36 ${menu.title === selection ? sizeLarge : sizeBase}`}>
                            {menu.icon}
                        </span>
                        <span className={`md:block sm:hidden md:text-lg md:pl-10 select-none ${menu.title === selection ? "font-bold" : "font-sans"}`}>
                            {menu.title}
                        </span>
                    </li>
                ))}
            </ol>
        </menu>
    )
}