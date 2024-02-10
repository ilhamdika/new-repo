import React, { useState } from 'react';
import TextInput from '@/Components/TextInput';
import LayoutAdmin from '@/Layouts/Admin/Index';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ transactionDetail, category }) {
  const trans = transactionDetail[0];
  console.log(trans)
  const { data, setData, post } = useForm({
    name: trans.name,
    value: trans.value,
    ms_category_id: trans.ms_category_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    Inertia.post(route('admin.dashboard.update_data_transaksi', { id: trans.id }),{
        _method: 'PUT',
        name: data.name,
        value: data.value,
        ms_category_id: data.ms_category_id
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  return (
    <LayoutAdmin>
      <h1>Edit Data Transaksi</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <TextInput
            type="text"
            name="name"
            label="Nama"
            value={data.name}
            onChange={handleInputChange}
          />
          <TextInput
            type="text"
            name="value"
            label="Value"
            value={data.value}
            onChange={handleInputChange}
          />
          <select
            className="w-1/4"
            name="ms_category_id"
            onChange={handleInputChange}
            value={data.ms_category_id}
          >
            {category.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <PrimaryButton
            type="submit"
            className="bg-green-500 hover:bg-green-700"
          >
            Update
          </PrimaryButton>
        </div>
      </form>
    </LayoutAdmin>
  );
}
