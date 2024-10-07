import { RiHome3Fill, RiChatNewFill, RiUser3Fill } from "react-icons/ri";
import { HiSearch, HiPlus } from "react-icons/hi";
import { FcVip } from "react-icons/fc";
import { useState } from "react";

export function Menu(){
    //constantes base
    const [selection, setSelection] = useState('');
    const sizeBase = "w-[32px] h-[32px]";
    const sizeLarge = "w-[34px] h-[34px]";
    //selectores de estado
    const [sizeHome, setSizeHome] = useState(sizeBase);
    const [sizeChat, setSizeChat] = useState(sizeBase);
    const [sizeUser, setSizeUser] = useState(sizeBase);
    const [sizeSearch, setSizeSearch] = useState(sizeBase);
    const [sizePlus, setSizePlus] = useState(sizeBase);
    //valores del menu
    const menus = [
        { title: "Home", icon: <RiHome3Fill className={sizeHome}/> },
        { title: "Chat", icon: <RiChatNewFill className={sizeChat}/> },
        { title: "Add", icon: <HiPlus className={sizePlus}/> },
        { title: "Search", icon: <HiSearch className={sizeSearch}/> },
        { title: "User", icon: <RiUser3Fill className={sizeUser}/> },
    ]
    //construccion del menu
    return (
        <menu className="w-1/5 h-screen fixed bg-primary border-r-[0.05px] border-primary-gray">
            <section className="flex items-center gap-x-4 rounded-md text-sm text-light-gray p-5 mt-8">
                <FcVip className=" h-16 w-16 sm:h-9 "/>
                <samp className="self-center text-xl font-semibold ">Style Up</samp>
            </section>
            
            <ol>
                {menus.map((menu) => (
                    <li key={menu.title} className="flex items-center hover:bg-light-primary rounded-md cursor-pointer text-light-gray hover:text-secondary h-14 m-4 pl-3"
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
                        <span className="absolute">
                            {menu.icon}
                        </span>
                        <span className={`text-lg ml-12 select-none ${menu.title === selection ? "font-bold" : "font-sans"}`}>
                            {menu.title}
                        </span>
                    </li>
                ))}
            </ol>
        </menu>
    )
}