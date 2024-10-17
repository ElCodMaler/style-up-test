import { FcVip } from "react-icons/fc";

export function Logo(){
    return (
        <div className="text-sm text-light-gray sm:hidden md:flex md:m-10">
            <FcVip className="size-16 sm:h-9"/>
            <samp className="self-center text-xl font-semibold">Style Up</samp>
        </div>
    );
}