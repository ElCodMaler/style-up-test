import { Outlet } from "react-router-dom";
import { Menu } from "../components/layout";

export function Layouts(){
    return (
        <>
            <Menu />
            <main className="md:w-[80%] md:ml-[20%] sm:flex-grow">
                <Outlet />
            </main>
        </>
    );
}