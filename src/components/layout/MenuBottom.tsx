import { RiHome3Fill, RiChatNewFill, RiUser3Fill } from "react-icons/ri";
import { HiSearch, HiPlus } from "react-icons/hi";
import { useState } from "react";

export function MenuBottom(){
    const sizeBase = "sm:size-[20px] md:size-[32px]";
    const sizeLarge = "sm:size-[24px] md:size-[34px]";
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
        <menu className="fixed bottom-0 z-50 w-full h-12 bg-primary border-r-[0.05px] border-primary-gray">
            {/*<section className="grid h-full m-4 max-w-lg grid-cols-3 rounded-md text-sm text-light-gray p-5 mt-8">
                <FcVip className="size-16 sm:h-9 "/>
                <samp className="self-center text-xl font-semibold ">Style Up</samp>
            </section>*/}
            
            <ol className="grid h-full w-full grid-cols-5 mx-auto bg-light-secondary">
                {menus.map((menu) => (
                    <li key={menu.title} className="inline-flex flex-col items-center justify-center px-0 hover:bg-light-primary rounded-md cursor-pointer text-light-gray hover:text-secondary"
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
                    >
                        <span className="absolute">
                            {menu.icon}
                        </span>
                        
                    </li>
                ))}
            </ol>
        </menu>
    )
}