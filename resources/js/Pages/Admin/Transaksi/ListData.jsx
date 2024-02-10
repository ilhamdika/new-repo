import LayoutAdmin from "@/Layouts/Admin/Index"
import PrimaryButton from "@/Components/PrimaryButton"
import { Link } from "@inertiajs/react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function Index(){
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
                    <tr>
                        <td>1</td>
                        <td>
                            test
                        </td>
                        <td>Naruto</td>
                        <td>Naruto</td>
                        <td>Naruto</td>
                        <td>Naruto</td>
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
                    
                </tbody>
            </table>
        </LayoutAdmin>
    )
}