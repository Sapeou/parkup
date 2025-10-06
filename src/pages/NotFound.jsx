import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="container">
      <h2>Página não encontrada</h2>
      <div className="card" style={{padding:16}}>
        <p>A página que você procura não existe.</p>
        <Link to="/" className="btn">Voltar para Home</Link>
      </div>
    </div>
  )
}
