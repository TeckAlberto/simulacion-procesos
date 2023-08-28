import { useContext, useState } from 'react';
import { SimulationContext } from './context/SimulationProvider';
import { SimulationContextType } from './context/types';
import Process from './components/Process';
import Time from './components/Time';

export default function App() {
  const [process, setProcess] = useState(false);
  //const [error, setError] = useState(false);
  const { lot, lots, count } = useContext(SimulationContext) as SimulationContextType;


  const handleClick = (): void => {
    setProcess(true)
  }


  return (
    <> 
      {!process ? (
        <div className='relative'>
          {(lot.length > 0 || lots.length > 0) ? (
            <button 
              className='absolute block w-full px-8 py-3 text-sm font-bold text-white bg-blue-500 md:w-auto md:left-0 top-5'
              onClick={ handleClick}
            >
              Empezar Procesos
            </button>
          ) : null}

            <p className='absolute block w-full px-8 py-3 text-sm font-bold text-center text-white bg-green-700 md:w-auto md:right-0 top-20'>Procesos: {count}  </p>

          <div>
            <Time
              timeNumber={12}
              message='Hola mundo'
            />
          </div>

          <div className='flex flex-col items-center justify-center h-screen p-5 bg-gray-100 lg:flex-row'>
            <h1 className="mt-10 text-4xl md:mt-0 md:mx-auto lg:w-1/3 text-bond">Procesamiento por lotes</h1>
            <Process />
          </div>
        </div>
      ) : (
        <h1 className='text-4xl'>Procesos</h1>
      )}
    </>
  );
}
