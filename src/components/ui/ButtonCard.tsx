import React from "react";

interface props extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}

export function ButtonCard({children, ...rest}: props){
    return (
        <form {...rest} className="relative lg:max-w-lg lg:mb-3 lg:w-full lg:h-[400px] sm:w-full sm:mb-6 sm:h-[200px]  mx-auto bg-new-white rounded-2xl shadow text-new-white hover:bg-light-gray">
            {children}
        </form>
    );
}