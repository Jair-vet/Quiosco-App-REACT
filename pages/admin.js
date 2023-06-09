import useSWR from 'swr'
import AdminLayout from "@/layout/AdminLayout";
import axios from 'axios';
import { Orden } from '@/components/Orden';

export default function Admin(){

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})


    return(
        <AdminLayout pagina={'Admin'}>
            <h1 className="text-4xl font-black text-amber-500">Panel de Administración de Ordenes</h1>
            <p className="text-2xl my-10">Administra las Ordenes</p>

            {data && data.length ? data.map(orden => (
                <Orden 
                    key={orden.id}
                    orden={orden}
                />
            )) : <p>No hay Ordenes Pendientes</p> }
        </AdminLayout>
    )
}