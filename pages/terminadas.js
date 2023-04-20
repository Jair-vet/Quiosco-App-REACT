import AdminLayout from "@/layout/AdminLayout";
import useSWR from 'swr'
import axios from 'axios';
import { OrdenTerminada } from "@/components/OrdenTerminada";

export default function Terminadas(){

    const fetcher = () => axios('/api/terminadas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/terminadas', fetcher, {refreshInterval: 100})


    return (
        <AdminLayout pagina={'Ordenes Teminadas'}>
            <h1 className="text-4xl font-black text-amber-500">Ordenes Teminadas</h1>
            <p className="text-2xl my-10">Aqui se muestran las Ordenes que se Realizarón</p>
            

            {data && data.length ? data.map(terminada => (
                <OrdenTerminada 
                    key={terminada.id}
                    terminada={terminada}
                />
            )) : <p>No hay Ordenes Terminadas</p> }
        </AdminLayout>
    )
}
