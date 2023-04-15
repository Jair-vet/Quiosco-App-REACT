import { Producto } from "@/components/Producto";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";

export default function Resumen() {
    const { categoriaActual } = useQuiosco()
    
    return(
        <Layout pagina='Resumen'>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>
        </Layout>
    )
}