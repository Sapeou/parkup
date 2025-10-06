import React from 'react'

export default function Profile(){
  return (
    <div className="container">
      <h2>Meu Perfil</h2>
      <div className="card" style={{padding:16}}>
        <p><strong>Nome:</strong> Usuário de Exemplo</p>
        <p><strong>E-mail:</strong> user@example.com</p>
        <div style={{marginTop:12}}>
          <button className="button-primary">Editar perfil</button>
        </div>
      </div>
    </div>
  )
}
