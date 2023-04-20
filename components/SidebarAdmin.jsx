import { useRouter } from "next/router"

const ordenes = [
    {orden: 1, nombre: 'Panel Administración', url: '/admin'},
    {orden: 2, nombre: 'Ordenes Terminadas', url: '/terminadas'},
]

export const SidebarAdmin = () => {

    const router = useRouter()

    return (
        <>

            <div className="mt-10">
                <div className="flex flex-col mt-10 w-full justify-center  text-white md:items-center gap-4">
                    {ordenes.map(orden => (
                        <button
                            onClick={() => {
                                router.push(orden.url)
                            }}
                            className="text-xl bg-emerald-600 md:rounded-r-xl  w-full p-4 font-bold hover:cursor-pointer uppercase"
                            key={orden.orden}
                        >
                            {orden.nombre}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
