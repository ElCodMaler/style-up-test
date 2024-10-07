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

    const classPostButtons = 'w-10 h-8 hover:text-light-gray';

    const [meGusta, setMegusta] = useState(false);
    const [comenta, setComenta] = useState(false);
    const [guarda, setGuarda] = useState(false);
    const [carrito, setCarrito] = useState(false);

  return (
    <div className="relative max-w-lg bg-secondary rounded-2xl shadow text-new-white mb-32 mx-auto">
        <img className="rounded-t-2xl object-cover w-full" src={post.image} alt="imagen 1" />
        <a href="#" className="absolute top-0 left-0 right-0 bottom-auto flex items-center text-secondary mt-10 ml-8 hover:text-light-secondary">
            <IoPersonCircle className="w-10 h-8"/>
            <span className="justify-between mb-0">{post.user}</span>
        </a>
        <section className="flex justify-between items-center gap-3 p-4">
            <p className="font-sans text-lg">
                {post.text}
            </p>
            {meGusta ? <IoHeartSharp className={classPostButtons} onClick={() => setMegusta(false)}/> : <IoHeartOutline className={classPostButtons} onClick={() => setMegusta(true)}/>}
            {comenta ? <IoChatboxEllipses className={classPostButtons} onClick={() => setComenta(false)}/> : <IoChatboxEllipsesOutline className={classPostButtons} onClick={() => setComenta(true)}/>}
            {carrito ? <IoCart className={classPostButtons} onClick={() => setCarrito(false)}/> : <IoCartOutline className={classPostButtons} onClick={() => setCarrito(true)}/>}
            {guarda ? <IoBookmark className={classPostButtons} onClick={() => setGuarda(false)}/> : <IoBookmarkOutline className={classPostButtons} onClick={() => setGuarda(true)}/>}
        </section>
    </div>
  );
}