import React from 'react'
import AppContext from '../state/AppContext'

export default function Reservations(){
  const {reservations} = React.useContext(AppContext)

  return (
    <div className="container">
      <h2>Minhas Reservas</h2>
      {reservations.length === 0 ? (
        <div className="card" style={{padding:16}}>Nenhuma reserva encontrada.</div>
      ) : (
        <div style={{display:'grid',gap:12}}>
          {reservations.map(r=> (
            <div key={r.id} className="card" style={{padding:12,display:'flex',gap:12,alignItems:'center'}}>
              <img src={r.spot.img} alt="spot" style={{width:84,height:64,objectFit:'cover',borderRadius:8}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:700}}>{r.spot.title}</div>
                <div className="muted">{new Date(r.when).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
