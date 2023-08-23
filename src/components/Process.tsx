import { useContext, createRef, RefObject } from 'react'
import { SimulationContext } from '../context/SimulationProvider'
import { SimulationContextType, Lot } from '../context/types'
export default function Process() {

  const { lot, setLot, lots, setLots } = useContext(SimulationContext) as SimulationContextType

  const nameRef: RefObject<HTMLInputElement> = createRef()
  const operationRef: RefObject<HTMLInputElement> = createRef()
  const timeRef: RefObject<HTMLInputElement> = createRef()
  const val1Ref: RefObject<HTMLInputElement> = createRef()
  const val2Ref: RefObject<HTMLInputElement> = createRef()


  const handleSubmitProcess = (e: React.FormEvent<HTMLFormElement>): void | boolean => {
      e.preventDefault()

      const lotData: Lot = {
        id: crypto.randomUUID(),
        name: nameRef.current?.value.toString(),
        operation: operationRef.current?.value.toString(),
        time: Number(timeRef.current?.value),
      }

      // if(lot >= 4){
        
      // }
      console.log('Send...', lotData)
  }

  
  return (
    <div className="w-1/2 p-4 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <form className='' noValidate onSubmit={handleSubmitProcess}>

        <div className="mb-5">
          <label className='text-xl font-bold text-violet-600' htmlFor="name">Nombre del Programador</label>

          <input 
            name="name" 
            placeholder='Nombre del programador'
            className='block w-full p-2 my-1 border rounded-md bg-gray-50 focus:border-indigo-700 focus:outline-none'
            id="name" 
            type="text" 
            formNoValidate
            ref={nameRef}
          />
        </div>

        <div className="mb-5">
          <label className='text-xl font-bold text-violet-600' htmlFor="operation">Operacion</label>

          <input 
            name="operation" 
            placeholder='Operacion'
            className='block w-full p-2 my-1 border rounded-md bg-gray-50 focus:border-indigo-700 focus:outline-none'
            id="operation"  
            type="text" 
            formNoValidate
            ref={operationRef}
          />
        </div>

        <div className="mb-5">
          <label className='text-xl font-bold text-violet-600' htmlFor="val1">Valor 1</label>

          <input 
            name="val1" 
            placeholder='Valor 1'
            className='block w-full p-2 my-1 border rounded-md bg-gray-50 focus:border-indigo-700 focus:outline-none'
            id="val1" 
            type="number"
            formNoValidate
            ref={val1Ref} 
          />
        </div>

        <div className="mb-5">
          <label className='text-xl font-bold text-violet-600' htmlFor="val2">Valor 2</label>

          <input 
            name="val2" 
            placeholder='Valor 2'
            className='block w-full p-2 my-1 border rounded-md bg-gray-50 focus:border-indigo-700 focus:outline-none'
            id="val2" 
            type="number"
            formNoValidate
            ref={val2Ref} 
          />
        </div>

        <div className="mb-5">
          <label className='text-xl font-bold text-violet-600' htmlFor="time">Tiempo estimado</label>

          <input 
            name="time" 
            placeholder='Tiempo estimado'
            className='block w-full p-2 my-1 border rounded-md bg-gray-50 focus:border-violet-700 focus:outline-none'
            id="time" 
            type="number"
            formNoValidate
            ref={timeRef} 
          />
        </div>

        <input type="submit" className='w-full p-3 text-sm text-white uppercase bg-indigo-600 rounded cursor-pointer hover:bg-indigo-800' value="Agregar Proceso"/>
        

      </form>
    </div>
  )
}
