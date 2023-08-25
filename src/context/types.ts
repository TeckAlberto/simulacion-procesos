export type Lot = {
    id: `${string}-${string}-${string}-${string}` | undefined
    name: string | undefined
    operation: string | undefined
    val1: number
    val2: number
    time: number | undefined
}

export type SimulationContextType = {
    lot: Array<Lot>,
    setLot: (value: Array<Lot>) => void,
    lots: Array<Array<Lot>>,
    setLots: (value: Array<Array<Lot>>) => void,
}

