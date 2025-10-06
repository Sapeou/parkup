import React from 'react'

export default function Login({onLogin}){
  return (
    <div className="container">
      <h2>Entrar</h2>
      <div className="card" style={{padding:16,maxWidth:480}}>
        <label>Email</label>
        <input className="input" />
        <label>Senha</label>
        <input className="input" type="password" />
        <div style={{marginTop:12}}>
          <button className="button-primary" onClick={onLogin}>Entrar</button>
        </div>
      </div>
    </div>
  )
}
