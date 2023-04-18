import useSWR from 'swr'
import AdminLayout from "@/layout/AdminLayout";
import axios from 'axios';

export default function Admin(){

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher)

    console.log(data);

    return(
        <AdminLayout pagina={'Admin'}>
            <h1 className="text-4xl font-black">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra las Ordenes</p>
        </AdminLayout>
    )
}