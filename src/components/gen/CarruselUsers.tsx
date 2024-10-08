import { HiUser } from "react-icons/hi2";

interface User{
    name: string,
    image: string
}

export const CarruselUsers: React.FC<{users: User[]}> = ({ users }) => {
    

    return(
        <section className="relative mx-auto flex sm:w-[90%] sm:p-1 sm:gap-1 md:w-4/5 md:p-2 md:mb-4">
            <div className="relative text-sm sm:top-1 sm:p-2 sm:mr-1 md:mr-4 cursor-pointe">
                <div className="md:size-20 sm:size-14 rounded-full bg-new-white flex justify-center items-center">
                    <HiUser className="md:size-16 sm:size-10 rounded-full text-secondary"/>
                </div>
                <svg fill="#632374" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" href="http://www.serif.com/" className="md:bottom-9 md:left-16 absolute md:size-5 text-secondary sm:bottom-8 sm:left-12 sm:size-4">
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
                <p className="text-light-gray md:mt-2 sm:mt-1 md:text-sm sm:text-[10px] ml-2">tu historia</p>
            </div>
            {users.map(user => (
                <div className=" text-sm justify-center items-center sm:p-1 md:grid md:mr-5 cursor-pointer sm:mt-2">
                    <img 
                    className="md:size-20 sm:size-14 p-1 rounded-full ring-2 ring-secondary sm:mb-1"
                    src={user.image} 
                    alt="Bordered avatar"
                    />
                    <p className="text-light-gray md:text-[13px] sm:text-[10px]">{user.name}</p>
                </div>
            ))}
        </section>
    );
}