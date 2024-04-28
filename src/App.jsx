import React from 'react'
import Fetch from './Fetch'
const App = () => {

  const [dados, setDados] = React.useState(null)
  const [load, loading] = React.useState(null)


  async function fetching(event){
    loading(true)
    const cpf = document.getElementById("html").value 
    const api = await fetch(`https://viacep.com.br/ws/${cpf}/json`)
    const json = await api.json()
    setDados(json)
    loading(false)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16pt'
    }}>  
      <label htmlFor="html">Digite seu CEP</label>
      <input style={{
        width: '200px',
        height: '50px',
        fontSize: '16pt',
        margin: '20px 20px'

    }} type="text" name="" id="html" />
      <button style={{
        width: '200px',
        height: '50px',
        backgroundColor: 'black',
        color: "white",
        outline: "none",
        borderRadius: '5px'
      }} onClick={fetching}>Procurar</button>
      {load && <p>carregando...</p>}  
      {!load && dados && <Fetch dados={dados}/>}  
    </div>
  )
}

export default App