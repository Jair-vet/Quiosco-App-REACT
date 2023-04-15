import { useRouter } from "next/router"

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'},
]


export const Pasos = () => {

    const router = useRouter()


  return (
    <>
        <div className="flex md:flex-row flex-col md:justify-around mb-5 p-2 rounded-lg w-full">
            {pasos.map(paso => (
                <button
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    className="text-2xl hover:text-white font-extrabold uppercase hover:bg-emerald-500 p-3
                             w-full "
                    key={paso.paso}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>
    </>
  )
}
