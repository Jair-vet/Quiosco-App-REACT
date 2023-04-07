import Image from "next/image"
import { formatearDinero } from '../helpers'
import useQuiosco from "@/hooks/useQuiosco"


export const Producto = ({ producto }) => {

    const  { nombre, imagen, precio } = producto  
    const {  handleSetPrducto, handleChangeModal } = useQuiosco()

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

            <button
                type="button"
                className="w-full bg-emerald-600 p-2 rounded-lg mt-5 uppercase text-white font-bold
                            hover:bg-emerald-800"
                onClick={() => {
                    handleChangeModal()
                    handleSetPrducto(producto)
                }}
            >
                Agregar
            </button>

        </div>
    </div>
  )
}
