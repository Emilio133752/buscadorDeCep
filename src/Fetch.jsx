import React from 'react'

const Fetch = ({dados}) => {
    return (
    <div>
        {console.log(dados)}
        <p>{dados.cep}</p>
        <p>{dados.bairro}</p>
        <p>{dados.ddd}</p>
        <p>{dados.ibge}</p>
        <p>{dados.localidade}</p>
        <p>{dados.lograduouro}</p>
        <p>{dados.uf}</p>
    </div>
  )
}

export default Fetch