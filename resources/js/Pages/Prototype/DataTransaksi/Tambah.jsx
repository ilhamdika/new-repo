import LayoutAdmin from "@/Layouts/Admin/Index"
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import route from "vendor/tightenco/ziggy/src/js";

export default function Index(){
    
    const [title, setTitle] = useState([{ code: '', rate_euro: '', date_paid: ''}]);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [selectedCategory2, setSelectedCategory2] = useState(1);
    const [formInputs, setFormInputs] = useState([{ id: 1, nama_transaksi: '', nominal_idr: '', category_id: selectedCategory}]);
    const [formInputs2, setFormInputs2] = useState([{ id: 1, nama_transaksi: '', nominal_idr: '', category_id: selectedCategory2}]);

    const handleTitleChange = (e) => {
        const { name, value } = e.target;
        setTitle((prevTitle) => ({
            ...prevTitle,
            [name]: value,
        }));
    };
    
    const handleInputChange = (id, value, field) => {
        setFormInputs(prevFormInputs => {
            return prevFormInputs.map(input =>
                input.id === id ? { ...input, [field]: value, category_id: selectedCategory } : input
            );
        });
    };
    const handleInputChange2 = (id, value, field) => {
        setFormInputs2(prevFormInputs => {
            return prevFormInputs.map(input =>
                input.id === id ? { ...input, [field]: value, category_id: selectedCategory } : input
            );
        });
    };

    const addNewForm = () => {
        const newFormInput = { id: formInputs.length + 1};
        setFormInputs([...formInputs, newFormInput]);
    };
    const addNewForm2 = () => {
        const newFormInput2 = { id: formInputs2.length + 1};
        setFormInputs2([...formInputs2, newFormInput2]);
    };

    const handleCategoryChange = (e) => {
        const categoryId = parseInt(e.target.value, 10);
        setSelectedCategory(categoryId);
        console.log('Selected Category ID:', categoryId);
    };

    const handleCategoryChange2 = (e) => {
        const categoryId = parseInt(e.target.value, 10);
        setSelectedCategory2(categoryId);
        console.log('Selected Category ID:', categoryId);
    };

    const submitAll = () => {
        console.log(title);
        console.log(formInputs);
        console.log(formInputs2);

        post(route('admin.dashboard.tambah_data_transaksi'), {
            title: title,
            formInputs: formInputs,
            formInputs2: formInputs2
        });
    };

    return(
        <LayoutAdmin>
            <h1 className="text-2xl mb-4">Input data transaksi</h1>
            <div className="flex">
                <div className="w-1/2">
                    <div className="flex">
                        <div className="w-1/4">
                            <h1>Description</h1>
                        </div>
                        <div className="w-1/2">
                            <TextArea
                                type="text"
                                className="w-full"
                                name="description"
                                value={title.description}
                                onChange={(e) => handleTitleChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex">
                        <div className="w-1/2">
                            <h1>Code</h1>
                        </div>
                        <div className="w-1/2">
                            <TextInput
                             type="text"
                             className="w-full"
                             name="code"
                             value={title.code}
                             onChange={(e) => handleTitleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="w-1/2">
                            <h1>Rate Euro</h1>
                        </div>
                        <div className="w-1/2">
                            <TextInput 
                            type="text" 
                            className="w-full"
                            name="rate_euro"
                            value={title.rate_euro}
                            onChange={(e) => handleTitleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className="w-1/2">
                            <h1>Date Paid</h1>
                        </div>
                        <div className="w-1/2">
                            <TextInput 
                            type="date" 
                            className="w-full"
                            name="date_paid"
                            value={title.date_paid}
                            onChange={(e) => handleTitleChange(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border mt-4 pt-4">
                <h1 className="text-2xl mb-4">Input data transaksi</h1>
                <div className="border p-7">
                    <div className="flex">
                        <div className="w-1/6">
                            <h1>Description</h1>
                        </div>
                        <div className="w-5/6">
                            <select className="w-1/4" value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="1">Income</option>
                                <option value="2">Expense</option>
                            </select>
                                <div className="flex mt-4">
                                <div className="w-1/2">
                                    <h1>Nama Transaksi</h1>
                                </div>
                                <div className="w-1/2 ml-3">
                                    <h1>Nominal IDR</h1>
                                </div>
                            </div>
                            {formInputs.map((input, index) => (
                                <div key={input.id} className="flex mt-4">
                                    <div className="w-1/2">
                                        <TextInput
                                        type="text"
                                        className="w-full"
                                        name="nama_transaksi"
                                        id="nama_transaksi"
                                        value={input.nama_transaksi}
                                        onChange={(e) => handleInputChange(input.id, e.target.value, "nama_transaksi")}
                                        />
                                    </div>
                                    <div className="w-1/3 ml-3">
                                        <TextInput 
                                        type="text" 
                                        className="w-full"
                                        name="nominal_idr"
                                        id="nominal_idr"
                                        value={input.nominal_idr}
                                        onChange={(e) => handleInputChange(input.id, e.target.value, "nominal_idr")}
                                        />
                                    </div>
                                    <div className="w-1/6">
                                        {index === formInputs.length - 1 && (
                                        <button onClick={addNewForm} className="bg-blue-500 text-white rounded-md ml-4">
                                            <FaPlus size="32"/>
                                        </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border p-7">
                    <div className="flex">
                        <div className="w-1/6">
                            <h1>Description</h1>
                        </div>
                        <div className="w-5/6">
                            <select className="w-1/4" value={selectedCategory2} onChange={handleCategoryChange2}>
                                <option value="1">Income</option>
                                <option value="2">Expense</option>
                            </select>
                            <div className="flex mt-4">
                                <div className="w-1/2">
                                    <h1>Nama Transaksi</h1>
                                </div>
                                <div className="w-1/2">
                                    <h1>Nominal IDR</h1>
                                </div>
                            </div>
                            {formInputs2.map((input, index) => (
                                <div key={input.id} className="flex mt-4">
                                    <div className="w-1/2">
                                    <TextInput
                                        type="text"
                                        className="w-full"
                                        name="nama_transaksi"
                                        id="nama_transaksi"
                                        value={input.nama_transaksi}
                                        onChange={(e) => handleInputChange2(input.id, e.target.value, "nama_transaksi")}
                                        />
                                    </div>
                                    <div className="w-1/3 ml-3">
                                        <TextInput 
                                        type="text" 
                                        className="w-full"
                                        name = "nominal_idr"
                                        id = "nominal_idr"
                                        value={input.nominal_idr}
                                        onChange={(e) => handleInputChange2(input.id, e.target.value, "nominal_idr")}
                                        />
                                    </div>
                                    <div className="w-1/6">
                                        {index === formInputs2.length - 1 && (
                                        <button onClick={addNewForm2} className="bg-blue-500 text-white rounded-md ml-4">
                                            <FaPlus size="32"/>
                                        </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white rounded-md p-2" onClick={submitAll}>Submit</button>
                </div>
            </div>
                    
        </LayoutAdmin>
    )
}