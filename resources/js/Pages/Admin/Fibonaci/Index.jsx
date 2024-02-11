import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import LayoutAdmin from "@/Layouts/Admin/Index"
import { useForm } from '@inertiajs/react';

export default function Index(){
    const { data, setData, post } = useForm({
        n1: 0,
        n2: 0,
        result: null,
      });
    
      const calculateSum = () => {
        post(route('admin.dashboard.penjumlahan_fibonaci'), {
          n1: data.n1,
          n2: data.n2,
        });
      };
    return(
        <LayoutAdmin>
            <h1>FIbonaci</h1>

            <div>
                <h1>Fibonacci Sum</h1>
                <label htmlFor="n1">Enter n1:</label>
                <TextInput
                    type="number"
                    id="n1"
                    value={data.n1}
                    onChange={(e) => setData('n1', e.target.value)}
                />
                <br />
                <label htmlFor="n2">Enter n2:</label>
                <TextInput
                    type="number"
                    id="n2"
                    value={data.n2}
                    onChange={(e) => setData('n2', e.target.value)}
                />
                <br />
                <PrimaryButton onClick={calculateSum}>Calculate Sum</PrimaryButton>
                <br />
                <p>Result: {data.result}</p>
            </div>
        </LayoutAdmin>
    )
}