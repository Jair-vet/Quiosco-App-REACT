import { Producto } from "@/components/Producto";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";
import { useCallback, useEffect } from "react";
import { formatearDinero } from "../helpers";

export default function Total() {
    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

    const comprobarPedido = useCallback(() => {
      return pedido.length === 0 || nombre === "" || nombre.length < 3;
    }, [pedido, nombre]);
  
    useEffect(() => {
      comprobarPedido();
    }, [pedido, comprobarPedido]);
  
    
    return(
        <Layout pagina='Resumen'>
            <h1 className="text-4xl font-black text-center md:text-left">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10 text-center md:text-left">Confirma tu pedido a Continuación</p>

            <form
                onSubmit={colocarOrden}
            >
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
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>

                {/* Total a Pagar */}
                <div className="mt-10">
                    <p className="text-2xl text-center md:text-left">
                        Total a pagar: {""}{" "}
                        <span className="font-extrabold text-amber-500 text-3xl">
                            {formatearDinero(total)}
                        </span>
                    </p>
                </div>

                {/* Boton para enviar el Pedido */}
                <div className="mt-5">
                    <input 
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-emerald-100 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-800'}
                                w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white focus:outline-none 
                                cursor-pointer`}
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}