import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const QuioscoContext = createContext()
const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id )
        setCategoriaActual(categoria[0])
    } 

    const handleSetPrducto = producto => {
        setProducto(producto)
    }

    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetPrducto,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext