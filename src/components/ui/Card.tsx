import React from "react";

interface props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({children}: props){
    return (
        <div className="relative lg:max-w-lg lg:mb-3 lg:w-full lg:h-[400px] sm:w-full sm:mb-6 sm:h-[260px]  mx-auto bg-new-white rounded-2xl shadow text-new-white hover:bg-light-gray">
            {children}
        </div>
    );
}