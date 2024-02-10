import SideBar from "./SideBar";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Authenticated ({auth, children}){
    const [dark, setDark] = useState(true);

    const toggleTheme = () => {
      setDark(!dark);
      document.documentElement.classList.toggle('dark');
    };

    return(
        <>
        
        <div className="flex dark:bg-dark">
            
            <SideBar
            icon={dark ? <FiMoon/> : <FiSun/> }
            click={toggleTheme}
            auth={auth}
            />

            <div className="h-auto flex-1 p-7">
                <main className="dark:bg-dark">
                    {children}
                </main>
            </div>
        </div>
    
        </>
    )
}