import { useContext, useState } from 'react';
import { SimulationContext } from './context/SimulationProvider';
import { SimulationContextType } from './context/types';
import Process from './components/Process';

export default function App() {
  const [process, setProcess] = useState(false);
  //const [error, setError] = useState(false);
  const { lot, lots } = useContext(SimulationContext) as SimulationContextType;


  const handleClick = (): void => {
    setProcess(true)
  }


  return (
    <> 
      {!process ? (
        <div className='relative'>
          {(lot.length > 0 || lots.length > 0) ? (
            <button 
              className='absolute left-0 px-8 py-3 text-sm font-bold text-white bg-blue-500 top-10'
              onClick={ handleClick}
            >
              Empezar Procesos
            </button>
          ) : null}
          <div className='flex flex-col items-center justify-center h-screen p-5 bg-gray-100 md:flex-row'>
            <h1 className="mt-10 text-4xl md:mx-auto md:w-1/3 text-bond">Procesamiento por lotes</h1>
            <Process />
          </div>
        </div>
      ) : (
        <h1 className='text-4xl'>Procesos</h1>
      )}
    </>
  );
}
