import Image from "next/image"

export const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria

    return (
        <>
            <div className="w-full hover:bg-emerald-600 border md:rounded-r-xl">
                <div className="flex items-center gap-4 w-full p-5 hover:duration-200 hover:bg-emerald-600 hover:text-white md:rounded-r-xl md:hover:translate-x-8 hover:text-2xl">
                    <Image 
                        width={70}
                        height={70}
                        src={`/assets/img/icono_${icono}.svg`}
                        alt="Imagen Icono"
                        />

                    <button
                        type="button"
                        className="text-1xl font-bold hover:cursor-pointer uppercase"
                        >
                        {nombre}
                    </button>
                </div>
            </div>
        </>
    )
}
