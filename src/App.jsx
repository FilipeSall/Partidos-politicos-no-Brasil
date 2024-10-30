import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://dadosabertos.camara.leg.br/api/v2/partidos');
        const result = await response.json();
        console.log(result.dados)
        setData(result.dados);
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return (
    <main className='main-container'>
      {loading ? <p>Carregando</p> :
        <div>
          <h1>Principais Partidos Brasileiros</h1>
          {data && data.map((partido) => (
            <p key={partido.id}>{partido.nome}</p>
          ))}
        </div>
      }
    </main>
  )
}

export default App
