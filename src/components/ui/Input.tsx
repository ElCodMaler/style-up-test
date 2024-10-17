import React from "react";

interface input extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({className, ...props}: input){
    return (
        <input {...props} className={`bg-primary-gray border mb-8 placeholder-new-white font-medium text-white md:text-base sm:text-sm rounded-lg focus:ring-secondary focus:border-light-secondary block w-full p-2.5 ${className}`}/>
    );
}