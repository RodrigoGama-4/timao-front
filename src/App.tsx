import './App.css'
import { Idol } from './components/idolos/Idol'
import { useIdoloData } from './hooks/useIdoloData'
import { IdoloData } from './interface/IdoloData'

function App() {
  const {data} = useIdoloData();
 
  return (
    <div className="container">
      <h1>Idolos do Timão</h1>
      <div className="card-grid">
        {data?.map(idoloData => 
        <Idol
        quantidadeTitulos={idoloData.quantidadeTitulos}
        image={idoloData.image}
        nome={idoloData.nome}
        />)}
      </div>
    </div>
  )
}

export default App
