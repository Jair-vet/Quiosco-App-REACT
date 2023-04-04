import useQuiosco from "@/hooks/useQuiosco"
import Image from "next/image"

export const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria
    const { categoriaActual, handleClickCategoria } = useQuiosco()

    return (
        <>
            <div className={`flex w-full justify-center border-t md:rounded-r-xl bg-emerald-600`}>
                <div className={`${
                    categoriaActual?.id === id ? "bg-emerald-600 text-white md:translate-x-8 border-none" : "bg-white"
                }    flex md:items-center justify-center md:rounded-r-md gap-4 w-full p-5 hover:duration-200  hover:bg-emerald-600
                     hover:text-white md:hover:translate-x-8 hover:text-2xl`}>
                    <div className="flex">
                        <Image 
                            width={70}
                            height={70}
                            src={`/assets/img/icono_${icono}.svg`}
                            alt="Imagen Icono"
                            />
                    </div>
                    

                    <button
                        type="button"
                        className="text-1xl font-bold hover:cursor-pointer uppercase"
                        onClick={() => handleClickCategoria(id)}
                        >
                        {nombre}
                    </button>
                </div>
            </div>
        
        </>
    )
}
