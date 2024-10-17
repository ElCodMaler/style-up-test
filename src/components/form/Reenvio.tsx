interface reenvio {
    className?: string,
    parrafo: string,
    textLink: string
}

export function Reenvio({className, parrafo, textLink}: reenvio){

    return(
        <p className={`text-sm text-gray-500 ${className}`}>
            {parrafo}
            <a href="#" className="ml-1 font-medium text-light-secondary hover:underline">
                {textLink}
            </a>
        </p>
    );
}