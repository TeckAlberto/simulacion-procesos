import { useContext, createRef, RefObject } from 'react'
import { SimulationContext } from '../context/SimulationProvider'
import { SimulationContextType } from '../context/types'
export default function Process() {

  const { lots, setLots } = useContext(SimulationContext) as SimulationContextType

  const nameRef: RefObject<HTMLInputElement> = createRef()
  const operationRef: RefObject<HTMLInputElement> = createRef()
  const timeRef: RefObject<HTMLInputElement> = createRef()
  const val1Ref: RefObject<HTMLInputElement> = createRef()
  const val2Ref: RefObject<HTMLInputElement> = createRef()


 const handleSubmitProcess = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()

     
      console.log('Send...', nameRef.current?.value)
    }
  return (
    <div className="p-4 mx-auto mt-10 bg-white rounded shadow-lg">
      <form noValidate onSubmit={handleSubmitProcess}>

        <div className="mb-5">
          <label className='text-slate-800 text-xl font-bold' htmlFor="name">Nombre del Programador</label>

          <input 
            name="name" 
            placeholder='Nombre del programador'
            className='block w-full my-1 p-2 bg-gray-50 border focus:border-indigo-900 border-indigo-600'
            id="name" 
            type="text" 
            formNoValidate
            ref={nameRef}
          />
        </div>

        <div className="mb-5">
          <label className='text-slate-800 text-xl font-bold' htmlFor="operation">Operacion</label>

          <input 
            name="operation" 
            id="operation"  
            type="text" 
            formNoValidate
            ref={operationRef}
          />
        </div>

        <div className="mb-5">
          <label className='text-slate-800 text-xl font-bold' htmlFor="val1">Valor 1</label>

          <input 
            name="val1" 
            id="val1" 
            type="number"
            formNoValidate
            ref={val1Ref} 
          />
        </div>

        <div className="mb-5">
          <label className='text-slate-800 text-xl font-bold' htmlFor="val2">Valor 2</label>

          <input 
            name="val2" 
            id="val2" 
            type="number"
            formNoValidate
            ref={val2Ref} 
          />
        </div>

        <div className="mb-5">
          <label className='text-slate-800 text-xl font-bold' htmlFor="time">Tiempo estimado</label>

          <input 
            name="time" 
            id="time" 
            type="number"
            formNoValidate
            ref={timeRef} 
          />
        </div>

        <input type="submit" className='p-3 text-sm text-white uppercase bg-indigo-600 rounded hover:bg-indigo-800' value="Agregar Proceso"/>
        

      </form>
    </div>
  )
}
