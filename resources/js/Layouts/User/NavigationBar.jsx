import { useState } from "react";
import { Link } from '@inertiajs/react'
import PrimaryButton from "@/Components/PrimaryButton";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

export default function NavigationBar ({text, click}){
    let Menu = [
        {
          name: "Homepage",
          link: "prototype.index",
          submenu: []
        },
        {
          name: "News",
          link: "prototype.index",
          submenu: []
        },
        {
          name: "Produk",
          link: "prototype.portfolio",
          submenu: [
            { name: "Google", link: "submenu1" },
            { name: "Facebook Ads", link: "submenu2" },
            { name: "SEO", link: "submenu3" },
            { name: "Training", link: "submenu4" },
          ]
        },
        {
          name: "Pemesanan",
          link: "prototype.about",
          submenu: []
        },
        {
          name: "Kontak",
          link: "prototype.about",
          submenu: []
        },
    ];

    let [open, setOpen] = useState(false);
    let [activeMenu, setActiveMenu] = useState(null);
    let [hoveredMenu, setHoveredMenu] = useState(null);

    const handleMenuHover = (index) => {
        setHoveredMenu(index);
    };

    const handleMenuClick = (index) => {
        setActiveMenu(index);
        setOpen(false);  
    };

    return (
        <div className='shadow-tablet w-full fixed-absolute top-0 left-0 mobile:fixed mobile:bg-gray-500'>
            <div className='tablet:flex items-center justify-between py-4 tablet:px-10 px-7'>
                <div className='text-3xl cursor-pointer flex items-center dark:text-white mobile:text-xl'>
                    PartnerIklan.com
                </div>
                
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-11 top-4 cursor-pointer tablet:hidden'>
                    {open ? <IoCloseSharp /> : <BsList />}
                </div>

                <ul className={`tablet:flex tablet:items-center tablet:pb-0 pb-12 absolute tablet:static z-20 bg-white left-0 w-full tablet:w-auto tablet:bg-transparent mobile:bg-gray-500 tablet:pl-0 pl-1 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {Menu.map((menu, index) => (
                        <li key={menu.name} 
                            className={`text-xl tablet:my-0 my-1 relative ${index === activeMenu ? 'border-b-2 border-blue-500' : ''}`}
                            onMouseEnter={() => handleMenuHover(index)}
                            onMouseLeave={() => setHoveredMenu(null)}>
                            <Link 
                                className={`dark:text-white hover:text-gray-400 duration-500 ml-2 mr-2 tablet:text-l ${index === activeMenu ? 'font-bold' : ''}`}
                                onClick={() => handleMenuClick(index)}
                            >
                                {menu.name}
                            </Link>
                            {menu.submenu.length > 0 && hoveredMenu === index && (
                                <ul className="absolute mobile:relative left-0 top-full bg-slate-200 rounded-xl">
                                    {menu.submenu.map((subMenu) => (
                                        <li key={subMenu.name} className='dark:text-white hover:text-gray-400 duration-500 ml-2 mr-2 tablet:text-l mt-4 mb-2'>
                                            <Link href={subMenu.link}>{subMenu.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}
