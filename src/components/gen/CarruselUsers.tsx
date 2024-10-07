import { HiUser } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

interface User{
    name: string,
    image: string
}

export const CarruselUsers: React.FC<{users: User[]}> = ({ users }) => {
    return(
        <section className=" relative left-[420px] max-w-[920px] p-8 flex overflow-hidden gap-5 mb-4">
            <div className="relative text-sm top-0 p-0 cursor-pointer mr-2">
                <div className="w-20 h-20 rounded-full bg-new-white flex justify-center items-center">
                    <HiUser className="w-16 h-16 rounded-full text-secondary"/>
                </div>
                <HiPlus className="bottom-7 left-14 absolute  w-6 h-6 text-secondary"/>
                <p className="text-light-gray mt-2 text-sm ml-2">tu historia</p>
            </div>
            {users.map(user => (
                <div className="text-sm justify-center items-center p-0 cursor-pointer">
                    <img 
                    className="w-20 h-20 p-1 rounded-full ring-2 ring-secondary mb-2"
                    src={user.image} 
                    alt="Bordered avatar"
                    />
                    <p className="text-light-gray">{user.name}</p>
                </div>
            ))}
        </section>
    );
}