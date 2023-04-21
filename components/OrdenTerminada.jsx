import Image from "next/image"
import { formatearDinero } from '../helpers'
import { formatearFecha } from '../helpers'

export const OrdenTerminada = ({terminada}) => {

    console.log({terminada});
    const { id, nombre, total, pedido, fecha } = terminada


    return (
        <div className="snap-y p-10 border-b-4 first-of-type:border-t-4 duration-100">
            <p className="text-xl font-black">Cliente: <span className="ml-10">{nombre}</span></p>
            <p className="text-xl font-black">Fecha: <span className="ml-10">{formatearFecha(fecha)}</span></p>

            <div>
                {pedido.map(platillo => (
                    <div key={platillo.id} className="py-3 flex border-b-4 border-dashed last-of-type:border-0 items-center">   
                        <div className="w-16">
                            <Image 
                                width={400}
                                height={500}
                                src={`/assets/img/${platillo.imagen}.jpg`}
                                alt={`Imagen Platillo${platillo.nombre}`}
                                className="grayscale"
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-gray-400">{platillo.nombre}</h4>
                            <p className="text-xl font-bold text-gray-400">Cantidad: <span className="text-gray-400 font-bold">{platillo.cantidad}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center md:flex md:items-center md:justify-between">
                <p className="text-2xl font-bold text-gray-400">
                    Total Pagado: <span className="font-black text-3xl text-emerald-500">{formatearDinero(total)}</span>
                </p>
            </div>
        </div>
    )
}
