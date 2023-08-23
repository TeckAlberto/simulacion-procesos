import { createContext, ReactNode, useState } from "react"
import { Lot, SimulationContextType } from './types'

type Props = {
  children: ReactNode
}

// Crear el contexto
export const SimulationContext = createContext<SimulationContextType | undefined>(undefined);

export function SimulationProvider({ children }: Props) {
  
    const [lots, setLots ] = useState<Array<Lot>>([])

  
    return (

        <SimulationContext.Provider
          value={{ lots, setLots}}
        >
          {children}
        </SimulationContext.Provider>
  )
}
