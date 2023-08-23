import {SimulationProvider} from './context/SimulationProvider'
import Process from './components/Process'


export default function App() {

  return (
    <SimulationProvider>
      <div className='flex flex-col'>
        <h1 className="mx-auto text-4xl text-bond">Procesamiento por lotes</h1>

        <Process/>

        
      </div>
    </SimulationProvider>
      
  )
}


