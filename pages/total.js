import { Producto } from "@/components/Producto";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";

export default function Total() {
    const { categoriaActual } = useQuiosco()
    
    return(
        <Layout pagina='Resumen'>
            <h1 className="text-4xl font-black text-center md:text-left">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10 text-center md:text-left">Confirma tu pedido a Continuación</p>

            <form>
                {/* Nombre */}
                <div>
                    <label 
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-extrabold text-xl"
                    >
                            Nombre
                    </label>

                    <input 
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 p-2 rounded-md focus:outline-none 
                                focus:ring focus:ring-amber-500"
                    />
                </div>
                {/* Total a Pagar */}
                <div className="mt-10">
                    <p className="text-center md:text-left text-2xl">
                        Total a Pagar {''} 
                        <span className="font-extrabold text-amber-500 text-3xl">
                            $200
                        </span>
                    </p>
                </div>

                {/*  */}
                <div className="mt-5">
                    <input 
                        type="button"
                        className="bg-emerald-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold
                         text-white focus:outline-none hover:bg-emerald-800 cursor-pointer"
                        value="Confirmar Pedido "
                    />
                </div>
            </form>
        </Layout>
    )
}