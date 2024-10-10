import { HiPlus } from "react-icons/hi";

interface Clothes{
    type: string,
    image: string
}

export const CardSelector: React.FC<{clothes: Clothes}> = ({clothes}) => {
    return (
        <div className="relative md:max-w-lg sm:w-[80%] h-[260px] md:w-[350px] bg-new-white rounded-t-2xl shadow text-new-white md:mb-32 sm:mb-16 mx-auto">
            <img className="rounded-t-2xl object-cover size-full opacity-20" src={clothes.image} alt="imagen" />
            <div className="absolute grid items-center justify-center sm:top-[30%] md:top-[30%] left-[30%] right-[30%] font-[20px] text-secondary hover:text-light-secondary">
                <HiPlus className="text-[40px] ml-5 rounded-full"/>
                <span className="md:justify-between sm:justify-start mb-0 sm:text-[15px]">subir diseño</span>
            </div>
            <section className="grid md:pb-12 md:pt-3 h-[200px] rounded-b-2xl justify-center items-center sm:h-9 md:h-6 bg-secondary">
                <span className="font-sans text-center md:text-lg sm:text-[15px]">{clothes.type}</span>
            </section>
        </div>
    );
}