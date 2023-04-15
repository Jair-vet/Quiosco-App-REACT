import { useRouter } from "next/router"

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'},
]


export const Pasos = () => {

    const router = useRouter()

    const calcularProgreso = () => {
        let valor
        if(router.pathname === "/") {
            valor = 5
        } else if(router.pathname === "/resumen"){
            valor = 50
        }else {
            valor = 100
        }
        return valor
    }

  return (
    <>
        <div className="flex md:flex-row flex-col justify-between mb-5 p-2 w-full">
            {pasos.map(paso => (
                <button
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    className="text-2xl font-extrabold uppercase p-3 w-full mt-10 md:mt-0"
                    key={paso.paso}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>

        <div className="bg-gray-200 mb-10">
            <div 
                className="rounded-full bg-amber-500 text-sm leading-none h-2"
                style={{width: `${calcularProgreso()}%`}}
            >
                
            </div>
        </div>
    </>
  )
}
