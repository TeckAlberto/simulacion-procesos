import { useContext } from "react"
import { SimulationContext } from "../context/SimulationProvider"
import { SimulationContextType } from "../context/types"
export default function Processes() {
    
    const {count }  = useContext(SimulationContext) as SimulationContextType
  
    return (
      <>
        <div className="relative">
          <p className='absolute block w-full px-8 py-3 text-sm font-bold text-center text-white bg-green-700 md:w-auto md:right-0 top-20'>Procesos: {count} </p>
        </div>
      </>
    )
}
