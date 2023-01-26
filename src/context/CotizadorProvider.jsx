import { useState, createContext } from 'react'
import { obtenerdiferenciayear , calcularmarca ,
     calcularplan , formateardinero } from '../helper'


const COtiazadorContext = createContext()

const CotizadorProvider = ({children }) => {
 
    const [datos , setDatos] = useState({
        marca: '',
        year: '' ,
        plan: '' 

    })

    const [ error, setError]  = useState('')
    const [ resultado, setresultado]  = useState(0)
    const [ cargando, setcargando]  = useState(false)

  
    

  //  const [modal , setmodal] = useState(false)

    const handeChangeDatos = e => {
     //   console.log(e.target.name)
    //    console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
            
            
        })
       
        
    }

    const cotizarseguro = () => {
        // una base
        let resultado = 2600

        //obtener diferencia anio
      //  console.log('datos',datos)
      //  console.log(datos.year)
        const diferencia = obtenerdiferenciayear(datos.year)
       // console.log(diferencia)


        // hay que restar el 3 de cada anio
        resultado -=( ( (diferencia * 3) * resultado) / 100 )

      //  console.log('resultado',resultado)
        // americano 15
        // eurpeo 30
        // asiatico 5
        resultado *= calcularmarca(datos.marca)
       // console.log('resultado',resultado)

        // plan basico 20
        // plan completa 50

        resultado *= calcularplan(datos.plan)
       // console.log('resultado',resultado)

        resultado = formateardinero(resultado)// resultado.toFixed(2)
      //  console.log('resultado',resultado)
      setcargando(true)

      setTimeout(() => {
        
        setresultado(resultado)
        setcargando(false)

      }, 3000);

   
    }


    return(
        <COtiazadorContext.Provider
         value={{
            datos,
            handeChangeDatos,
            error,
            setError,
            cotizarseguro,
            resultado,
            cargando


         }}
        >
            {children}

        </COtiazadorContext.Provider>

    )
}

export {
    CotizadorProvider
}

export default COtiazadorContext