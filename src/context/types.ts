export type Lot = {
    id: number,
    name: string,
    operation: string,
    time: number
}

export type SimulationContextType = {
    lots: Array<Lot>,
    setLots: (value: Array<Lot>) => void,
}

