export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: "USD"
    })
}

export const formatearFecha = fecha =>  {
    
    if (fecha === null || fecha === 'undefined') return fecha;
    
    const timestamp = 1681767961608
    let date = new Date(timestamp)

    console.log(fecha);

    
    const fechaFinal = date.getDate()+
          "/"+(date.getMonth()+ 1)+
          "/"+date.getFullYear()

    return fechaFinal

}

