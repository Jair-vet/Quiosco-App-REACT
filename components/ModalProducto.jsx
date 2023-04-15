import { formatearDinero } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"
import { useEffect, useState } from "react"


export const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco()
  const [cantidad, setCantidad] = useState(1)
  const [edicion, setEdicion] = useState(false)
  
  useEffect(() => {
    // Comprobar si el Modal Actual esta en el Pedido
    if( pedido.some(pedidoState => pedidoState.id === producto.id)) {

      const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
      setEdicion(true)
      setCantidad(productoEdicion.cantidad)
    }
  }, [producto, pedido])
  


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

          {/* Panel de Botones Aregar o Eliminar */}
          <div className="flex gap-4 mt-5 justify-center">
            {/* Menos */}
            <button 
              type="button"
              className="hover:text-red-500"
              onClick={() => {
                if(cantidad <= 1) return
                setCantidad(cantidad - 1)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            {/* Cantidad */}
            <p className="text-3xl">
              {cantidad}
            </p>

            {/* Mas */}
            <button 
              type="button"
              className="hover:text-emerald-500"
              onClick={() => {
                if(cantidad >= 5) return
                setCantidad(cantidad + 1)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          {/* Agregar al Pedido */}
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-emerald-500 hover:bg-emerald-700 px-5 py-2 mt-5 text-white rounded-lg 
                      w-2/3 font-bold uppercase"
              onClick={() => handleAgregarPedido({...producto, cantidad})}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    )
}
