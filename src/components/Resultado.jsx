
import { useCallback, useMemo , useRef} from "react"
import useCotizador from "../hooks/useCotizador"
import {Marcas , Planes } from '../constants/Index'


const Resultado = () => {

    const { resultado , datos } = useCotizador()
    const { marca , plan , year} = datos

    const [nombremarcas] = useCallback( Marcas.filter(m => m.id === Number(marca) ),
                           [resultado]
                            )

    const [nombrePlanes] = useCallback( Planes.filter(m => m.id === Number(plan) ),
                            [resultado]
                            )


    const yearref = useRef(year)                        

    if(resultado === 0 ) return null 

  return (

    <div className=" bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className=" text-gray-600 font-black text-3xl">
        Resumen
        </h2>

        <p className=" my-2"> 
        <span className=" font-bold">Marca: </span>
         {nombremarcas.nombre}
        </p>


        <p className=" my-2"> 
        <span className=" font-bold">Plan: </span>
         {nombrePlanes.nombre}
        </p>


        <p className=" my-2"> 
        <span className=" font-bold">Year auto: </span>
         {yearref.current}
        </p>

        <p className=" my-2 text-2xl"> 
        <span className=" font-bold">Total cotizacion: </span>
         {resultado}
        </p>


    </div>
  )
}

export default Resultado