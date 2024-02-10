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

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Deskripsi</th>
                        <th>Code</th>
                        <th>Rate Euro</th>
                        <th>Kategori</th>
                        <th>Nama Transaksi</th>
                        <th>Nominal</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {listTransaksi.data.map((trans, i=1) => (
                    <tr key={trans.id}>
                        <td>{i+1}</td>
                        <td>{trans.transaction_header.description}</td>
                        <td>{trans.transaction_header.code}</td>
                        <td>{trans.transaction_header.rate_euro}</td>
                        <td>{trans.transaction_header.date_paid}</td>
                        <td>{trans.name}</td>
                        <td>Action</td>
                        <td>
                            <Link>
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