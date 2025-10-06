import React from 'react'
import AppContext from '../state/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const {login} = React.useContext(AppContext)
  const [name,setName] = React.useState('')
  const [email,setEmail] = React.useState('')
  const nav = useNavigate()

  function handle(e){
    e.preventDefault()
    login({name,email})
    nav('/profile')
  }

  return (
    <div className="container">
      <h2>Cadastrar / Entrar</h2>
      <div className="card" style={{padding:16}}>
        <form onSubmit={handle} style={{display:'grid',gap:8}}>
          <label>Nome <input value={name} onChange={e=>setName(e.target.value)} required/></label>
          <label>Email <input value={email} onChange={e=>setEmail(e.target.value)} required/></label>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <button className="btn" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
