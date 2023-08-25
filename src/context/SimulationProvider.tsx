import { createContext, ReactNode, useState } from "react"
import { Lot, SimulationContextType } from './types'

type Props = {
  children: ReactNode
}

// Crear el contexto
export const SimulationContext = createContext<SimulationContextType | undefined>(undefined);

export function SimulationProvider({ children }: Props) {
  
    const [ lot, setLot ] = useState<Array<Lot>>([])
    const [ lots, setLots ] = useState<Array<Array<Lot>>>([])
    const [ timeGlobal, setTimeGlobal ] = useState<boolean>(false)

  
    return (

        <SimulationContext.Provider
          value={{ 
            lot, 
            setLot, 
            lots, 
            setLots, 
            timeGlobal, 
            setTimeGlobal
          }}
        >
          {children}
        </SimulationContext.Provider>
  )
}
