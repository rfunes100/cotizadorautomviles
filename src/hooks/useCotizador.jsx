import { useContext } from "react";
import COtiazadorContext from "../context/CotizadorProvider";

const useCotizador = () => {
    return useContext(COtiazadorContext)
    

}

export default useCotizador

