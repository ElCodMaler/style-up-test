import { HiUser } from "react-icons/hi2";

interface User{
    name: string,
    image: string
}

export const CarruselUsers: React.FC<{users: User[]}> = ({ users }) => {
    return(
        <section className="flex mx-auto sm:overflow-x-auto sm:space-x-1 sm:py-1 sm:gap-x-1 sm:transition-transform sm:duration-500 sm:w-[90%] sm:my-5  md:w-[85%] md:p-2 md:mb-4">
            {/** Contenedor del icono tu historia */}
            <div className="relative text-sm top-0 p-0 md:mr-1 cursor-pointe">
                <div className="md:size-20 sm:size-16 rounded-full bg-new-white flex justify-center items-center">
                    <HiUser className="md:size-16 sm:size-11 rounded-full text-secondary"/>
                </div>
                <svg fill="#632374" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" href="http://www.serif.com/" className="md:bottom-6 md:left-14 absolute md:size-5 text-secondary sm:bottom-5 sm:left-11 sm:size-5">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.84">
                        <path d="M14.5,14.501l-10.502,0c-0.828,0 -1.5,0.673 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5l10.502,0l-0.001,10.502c0,0.828 0.672,1.5 1.5,1.501c0.828,-0 1.5,-0.673 1.5,-1.5l0.001,-10.503l10.502,0c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.827 -0.672,-1.5 -1.5,-1.5l-10.502,0l0.001,-10.501c-0,-0.828 -0.672,-1.501 -1.5,-1.501c-0.828,0 -1.5,0.672 -1.5,1.5l-0.001,10.502Z">
                        </path>
                        <g id="Icon"></g>
                    </g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M14.5,14.501l-10.502,0c-0.828,0 -1.5,0.673 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5l10.502,0l-0.001,10.502c0,0.828 0.672,1.5 1.5,1.501c0.828,-0 1.5,-0.673 1.5,-1.5l0.001,-10.503l10.502,0c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.827 -0.672,-1.5 -1.5,-1.5l-10.502,0l0.001,-10.501c-0,-0.828 -0.672,-1.501 -1.5,-1.501c-0.828,0 -1.5,0.672 -1.5,1.5l-0.001,10.502Z">
                        </path>
                        <g id="Icon"></g>
                    </g>
                </svg>
                <p className="text-light-gray md:text-sm sm:text-[10px] text-center">tu historia</p>
            </div>
            {/** Contenedor de los iconos de las historias de otros usuarios */}
            {users.map(user => (
                <div className="text-sm md:grid md:px-1 cursor-pointer">
                    <div className="sm:size-16 sm:ring-[2.6px] sm:p-[2px] md:size-20 md:p-1 md:ring-[3px] rounded-full ring-secondary cursor-pointer">
                        <img 
                        className="size-full rounded-full object-cover"
                        src={user.image} 
                        alt="Bordered avatar"
                        />
                    </div>
                    
                    <p className="text-light-gray md:text-[13px] sm:text-[10px] text-center">{user.name}</p>
                </div>
            ))}
        </section>
    );
}