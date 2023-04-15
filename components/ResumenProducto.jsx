import Image from "next/image"
import { formatearDinero } from '../helpers'

export const ResumenProducto = ({ producto }) => {
  return (
    <div className="shadow-lg p-5 mb-3 flex gap-10 items-center rounded-lg">
        <div className="md:w-1/6">
            <Image 
                width={300}
                height={400}
                alt={`Imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
                className="rounded-md"
            />
        </div>

        <div lassName="md:w-5/6">
            <p className="text-3xl font-bold">{producto.nombre}</p>
            <p className="text-xl font-mono mt-2">Cantidad: {producto.cantidad}</p>
            <p className="text-xl font-mono mt-2">Precio: <span className="text-amber-500 font-extrabold">{formatearDinero(producto.precio)}</span></p>
            <p className="text-sm text-gray-900 font-mono mt-2">Subtotal: <span className="text-emerald-500 font-extrabold">{formatearDinero(producto.precio * producto.cantidad)}</span></p>
        </div>
    </div>
  )
}
