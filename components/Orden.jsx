import Image from "next/image"
import { formatearDinero } from '../helpers'

export const Orden = ({orden}) => {

    const { id, nombre, total, pedido } = orden

    const completarOrden = () => {
        console.log('Completando...');
    }

    return (
        <div className="snap-y p-10 border-b-4 first-of-type:border-t-4 duration-100">
            <h3 className="text-xl font-black">Orden: <span className="ml-14">{id}</span></h3>
            <p className="text-xl font-black">Cliente: <span className="ml-10">{nombre}</span></p>

            <div>
                {pedido.map(platillo => (
                    <div key={platillo.id} className="py-3 flex border-b-4 border-dashed last-of-type:border-0 items-center">   
                        <div className="w-16">
                            <Image 
                                width={400}
                                height={500}
                                src={`/assets/img/${platillo.imagen}.jpg`}
                                alt={`Imagen Platillo${platillo.nombre}`}
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{platillo.nombre}</h4>
                            <p className="text-xl font-bold text-gray-400">Cantidad: <span className="text-neutral-700 font-bold">{platillo.cantidad}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 text-2xl font-bold text-gray-400">
                    Total a Pagar: <span className="font-black text-3xl text-emerald-500">{formatearDinero(total)}</span>
                </p>

                <button 
                    className="mt-4 bg-indigo-700 text-white p-3 rounded-md uppercase font-bold hover:bg-indigo-900"
                    type="button"
                    onClick={completarOrden}
                >
                    Completar esta Orden
                </button>
            </div>
        </div>
    )
}
