import LayoutAdmin from "@/Layouts/Admin/Index"
import PrimaryButton from "@/Components/PrimaryButton"
import { Link } from "@inertiajs/react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function Index({listTransaksi}){
    console.log(listTransaksi)
    return(
        <LayoutAdmin>
            <h1 className="text-3xl mb-3">List data</h1>

            <table className="w-full">
                <thead>
                    <tr className="border-2">
                        <th className="border-2" >No</th>
                        <th className="border-2" >Deskripsi</th>
                        <th className="border-2" >Code</th>
                        <th className="border-2" >Rate Euro</th>
                        <th className="border-2" >Date Paid</th>
                        <th className="border-2" >Kategori</th>
                        <th className="border-2" >Nama Transaksi</th>
                        <th className="border-2" >Nominal(IDR)</th>
                        <th className="border-2" >Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {listTransaksi.data.map((trans, i=1) => (
                    <tr className="border-2" key={trans.id}>
                        <td className="border-2">{i+1}</td>
                        <td className="border-2" >{trans.transaction_header.description}</td>
                        <td className="border-2" >{trans.transaction_header.code}</td>
                        <td className="border-2" >{trans.transaction_header.rate_euro}</td>
                        <td className="border-2" >{trans.transaction_header.date_paid}</td>
                        <td className="border-2" >{trans.ms_category.name}</td>
                        <td className="border-2" >{trans.name}</td>
                        <td className="border-2" >{trans.value}</td>
                        <td className="border-2" >
                            <Link href={route('admin.dashboard.edit_data_transaksi', trans.id)}>
                                <PrimaryButton className="bg-yellow-500">
                                    <CiEdit size={20} />
                                </PrimaryButton>
                            </Link>
                            <PrimaryButton className="bg-red-600">
                                <MdDeleteOutline size={20} />
                            </PrimaryButton>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className="mt-4">
                {listTransaksi.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={`ml-2 px-4 py-2 border ${link.active ? 'bg-blue-500 text-white' : ''}`}
                    >
                        {link.label == 'Next &raquo;' ? 'Next' : link.label == '&laquo; Previous' ? 'Previous' : link.label}
                    </Link>
                ))}
            </div>

        </LayoutAdmin>
    )
}