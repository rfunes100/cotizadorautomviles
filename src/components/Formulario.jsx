import { Fragment  } from "react"
import { Marcas , Years , Planes  } from "../constants/Index"
import useCotizador from "../hooks/useCotizador"

import Error from "./Error"


const Formulario = () => {

const { datos , handeChangeDatos, error, setError,
    cotizarseguro
 } = useCotizador()

const handlesubmit = e => {
    e.preventDefault()
    console.log('datos',datos)

    if( Object.values(datos).includes('') )
    {
        setError('todos los campos son obligatorios')
        //console.log('todos los campos son obligatorios')
        return 

    }
    setError('')
  //  cotizarseguro()
    cotizarseguro()

}


  return (
   <> 
 
 {error &&  <Error></Error>}

   <form action=""
   onSubmit={handlesubmit}
   >
    <div className="my-5">
         <label className="block mb-3 font-bold
          text-gray-400 uppercase" htmlFor="">
            Marca
         </label>

         <select name="marca" id=""
         className=" w-full p-3 bg-white border
          border-gray-200"
          onChange={e => handeChangeDatos(e)}
          value={datos.marca}
         >
            <option value="">-- Selecciona Marca--</option>
            {
                Marcas.map(marca => (
                <option
                key={marca.id}
                value={marca.id}
                >{marca.nombre}</option>
                ))
            }


         </select>
    </div>


    <div className="my-5">
         <label className="block mb-3 font-bold
          text-gray-400 uppercase" htmlFor="">
            años
         </label>

         <select name="year" id=""
         className=" w-full p-3 bg-white border
          border-gray-200"
          onChange={e => handeChangeDatos(e)}
          value={datos.year}
         >
            <option value="">-- Selecciona año--</option>
            {
                Years.map(year => (
                <option
                key={year}
                value={year}
                >{year}</option>
                ))
            }


         </select>
    </div>

    <div className="my-5">
         <label className="block mb-3 font-bold
          text-gray-400 uppercase" htmlFor="">
            Elige un plan
         </label>

         <div className=" flex gap-3 items-center">
            {
                Planes.map(plan => (
                    <Fragment key={plan.id}>
                        <label htmlFor="">
                            {plan.nombre}
                        </label>
                        <input type="radio"
                        name="plan"
                        value={plan.id}
                        onChange={e => handeChangeDatos(e)}
                        />

                    </Fragment>

                ))
            }

         </div>

    </div>

    <input type="submit" 
    className="w-full bg-indigo-400; hover: bg-indigo-600
     transition-colors text-white cursor-pointer p-3 uppercase
      font-bold"
      value="Cotizar"
    />


   </form>
   </>
  )
}

export default Formulario