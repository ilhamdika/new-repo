import { Link } from "@inertiajs/react";
import { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { HiOutlineViewList } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import PrimaryButton from "@/Components/PrimaryButton";
import { AiFillCaretDown } from "react-icons/ai";
import { CiCalculator1 } from "react-icons/ci";

export default function SideBar({ click, icon }) {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(null); // State to track open submenu
    const Menus = [
        {
            name: "Dashboard",
            link: 'admin.dashboard.index',
            src: <MdDashboard size="32" color="black" className="dark:bg-slate-200 rounded-xl" />,
        },
        {
            name: "Data Transaksi",
            link: 'admin.dashboard.list_transaksi',
            src: <AiOutlineFileText size="32" color="black" className="dark:bg-slate-200 rounded-xl" />,
            submenu: [
                {
                    name: "Tambah Data Transaksi",
                    link: 'admin.dashboard.tambah_data_transaksi',
                },
                {
                    name: "List Data Transaksi",
                    link: 'admin.dashboard.list_transaksi',
                },
                {
                    name: "Rekap Transaksi",
                    link: 'admin.dashboard.rekap_transaksi',
                }
            ]
        },
        {
            name: "Bilangan",
            link: 'admin.dashboard.fibonaci',
            src: <CiCalculator1 size="32" color="black" className="dark:bg-slate-200 rounded-xl" />,
        }
    ];

    const handleSubmenuClick = (index) => {
        setSubmenuOpen(submenuOpen === index ? null : index);
        <HiOutlineViewList color="black" size={20} className="ml-auto cursor-pointer" />
    };

    return (
        <>
            <div
                className={` ${
                    open ? "w-72" : "w-20 "
                    } bg-emerald-300 dark:bg-slate-500 h-screen p-5 pt-8 relative duration-300`}
            >
                <HiOutlineViewList
                    size={30}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 dark:bg-slate-200 rounded-xl ${!open && "rotate-180 "}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <GrUserAdmin
                        size="40"
                        className={`w-10 cursor-pointer duration-500  ${
                            open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-black origin-left font-medium text-xl duration-200 dark:text-white ${
                            !open && "scale-0"
                            }`}
                    >
                        Admin
                    </h1>
                </div>
                <ul className="pt-6">
                {Menus.map((Menu, index) => (
    <li
        key={index}
        className={`relative rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
        ${Menu.gap ? "mt-9" : "mt-2"} ${
            index === 0 && "bg-light-white"
            } `}
    >
        <div className="flex items-center" onClick={() => Menu.submenu && handleSubmenuClick(index, Menu.name)}>
            <Link href={route(Menu.link)}>
                {Menu.src}
            </Link>
            <Link href={route(Menu.link)} className={` w-10 ${!open && "hidden"} origin-left duration-200 text-black dark:text-white`}>
                {Menu.name}
            </Link>
            {Menu.submenu && (
                <AiFillCaretDown color="black" size={20} className="ml-auto cursor-pointer" />
            )}
        </div>
        {/* Submenu */}
        {Menu.submenu && open && submenuOpen === index && (
            <ul className="absolute left-full top-0 mt-0 bg-white dark:bg-slate-700 shadow-lg rounded-md">
                {Menu.submenu.map((submenu, subIndex) => (
                    <li key={subIndex}>
                        <Link href={route(submenu.link)} className="block px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600">
                            {submenu.name}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </li>
))}
                </ul>
                <div className="absolute bottom-0 mb-5">
                    <PrimaryButton onClick={click}
                        className="text-white bg-slate-600 dark:bg-white dark:text-black "
                    >
                        {icon}
                    </PrimaryButton>
                    <p className="text-black text-sm">© 2021 MeIlham</p>
                </div>
            </div>
        </>
    )
}
