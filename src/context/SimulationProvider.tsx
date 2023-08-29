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
    const [ count, setCount ] = useState<number>(0)
    const [time, setTime] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<number | null>(null); 

    const startTimer = (): number => {
        const intervalId: number = setInterval(() => {
        setTime(prevTime => prevTime + 1);
        }, 1000); // Actualiza cada segundo

        return intervalId;
    };

    const formatTime = (seconds: number): string => {
        const minutes: number = Math.floor(seconds / 60);
        const remainingSeconds: number = seconds % 60;

        const formattedMinutes: string = String(minutes).padStart(2, '0');
        const formattedSeconds: string = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };



  
    return (

        <SimulationContext.Provider
          value={{ 
            lot, 
            setLot, 
            lots, 
            setLots, 
            timeGlobal, 
            setTimeGlobal,
            count, 
            setCount,
            time,
            startTimer,
            formatTime,
            intervalId,
            setIntervalId
          }}
        >
          {children}
        </SimulationContext.Provider>
  )
}
