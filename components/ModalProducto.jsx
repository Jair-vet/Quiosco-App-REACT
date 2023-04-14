import { formatearDinero } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"


export const ModalProducto = () => {
  const { producto, handleChangeModal } = useQuiosco()

    return (
      <div className="md:flex gap-10 rounded-lg p-8">
        <div className="md:w-1/3">
          <Image 
            width={300}
            height={400}
            alt={`imagen producto ${producto.nombre}`}
            src={`/assets/img/${producto.imagen}.jpg`}
            className="rounded-lg w-full"
          />
        </div>

        <div className="md:w-2/3">
          <div className="md:flex md:justify-end">
            <button 
              className="text-red-600"
              onClick={handleChangeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h1 className="text-2xl font-extrabold mt-5 uppercase text-center">{producto.nombre}</h1>
          <p className="mt-5 font-black text-4xl text-amber-500 text-center">
            {formatearDinero(producto.precio)}
          </p>
        </div>
      </div>
    )
}
