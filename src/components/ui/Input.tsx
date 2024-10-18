import React from "react";

interface input extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({className, ...props}: input){
    return (
        <input {...props} className={`text-base p-2.5 w-full font-medium md:mb-8 sm:mb-3 bg-primary-gray border placeholder-new-white text-white rounded-lg focus:ring-secondary focus:border-light-secondary block ${className}`}/>
    );
}