import React, { useState } from "react";
//antes de darle a click
import { IoBookmarkOutline, IoCartOutline, IoChatboxEllipsesOutline, IoHeartOutline } from "react-icons/io5";
//despues de darle a click
import { IoHeartSharp, IoChatboxEllipses, IoBookmark, IoCart } from "react-icons/io5";
//usuaio X
import { IoPersonCircle } from "react-icons/io5";

interface Post{
    user: string,
    text: string,
    image: string
}

export const Post: React.FC<{post: Post}> = ({ post }) => {
    //constantes estaticas
    const classPostButtons = 'size-9 hover:text-light-gray';
    //variables de estado
    const [meGusta, setMegusta] = useState(false);
    const [comenta, setComenta] = useState(false);
    const [guarda, setGuarda] = useState(false);
    const [carrito, setCarrito] = useState(false);

    return (
        <div className="relative object-cover md:max-w-lg sm:w-[80%] bg-secondary rounded-2xl shadow text-new-white md:mb-32 sm:mb-16 mx-auto">
            {/**Imagen del post */}
            <img className="rounded-t-2xl object-cover w-full" src={post.image} alt="imagen" />
            {/**Usuario del post */}
            <a href="#" className="absolute top-0 left-0 right-0 font-[10px] bottom-auto flex items-center text-secondary md:mt-10 md:ml-8 sm:mt-6 sm:ml-4 hover:text-light-secondary">
                <IoPersonCircle className="sm:size-7 md:size-10"/>
                <span className="md:justify-between sm:justify-start mb-0 sm:text-sm">{post.user}</span>
            </a>
            {/**Contenedor de comentarios y otras opciones */}
            <section className="flex justify-between items-center md:gap-3 md:p-4 sm:gap-2 sm:p-2">
                <p className="font-sans md:text-lg sm:text-[10px]">
                    {post.text}
                </p>
                {/**iconos del post */}
                {meGusta ? <IoHeartSharp className={classPostButtons} onClick={() => setMegusta(false)}/> : <IoHeartOutline className={classPostButtons} onClick={() => setMegusta(true)}/>}
                {comenta ? <IoChatboxEllipses className={classPostButtons} onClick={() => setComenta(false)}/> : <IoChatboxEllipsesOutline className={classPostButtons} onClick={() => setComenta(true)}/>}
                {carrito ? <IoCart className={classPostButtons} onClick={() => setCarrito(false)}/> : <IoCartOutline className={classPostButtons} onClick={() => setCarrito(true)}/>}
                {guarda ? <IoBookmark className={classPostButtons} onClick={() => setGuarda(false)}/> : <IoBookmarkOutline className={classPostButtons} onClick={() => setGuarda(true)}/>}
            </section>
        </div>
    );
}