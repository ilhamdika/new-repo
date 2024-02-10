import NavigationBar from "./NavigationBar"
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";


export default function LayoutPage ({children}){
    
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

    
    return(
        <>
        <div className="dark:bg-dark">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <NavigationBar
                text={dark ? <FiMoon/> : <FiSun/> }
                click={toggleTheme}
                
                
                />

                {/* Konten */}
                <div>
                    <main className="">
                        {children}
                    </main>
                </div>

            </div>
        </div>
        </>
    )
}