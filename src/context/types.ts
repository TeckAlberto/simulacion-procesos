export type Lot = {
    id: number
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
    timeGlobal: boolean
    setTimeGlobal: (value: boolean) => void,
    count: number,
    setCount: (value: number) => void
}

export type TimeType = {
    timeNumber: number
    message: string
}
