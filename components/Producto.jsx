import Image from "next/image"
import { formatearDinero } from '../helpers'

export const Producto = ({ producto }) => {

    const  { nombre, imagen, precio } = producto  

  return (
    <div className="flex flex-col items-center text-center border rounded-md p-3">
        <Image 
            src={`/assets/img/${imagen}.jpg`}
            alt={`Imagen Platillo ${nombre}`}
            className="rounded-md"
            width={200}
            height={300}
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatearDinero(precio)}
            </p>
        </div>
    </div>
  )
}
