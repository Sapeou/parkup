import React from 'react'

export default function SpotDetails({spot, onReserve}){
  if(!spot) return <div className="container"><p>Vaga não selecionada.</p></div>

  return (
    <div className="container">
      <h2>{spot.title}</h2>
      <div className="card" style={{padding:16}}>
        <img src={spot.img} alt="spot" style={{width:'100%',borderRadius:8}} />
        <p style={{marginTop:12}}>Preço: R$ {spot.price} / hr</p>
        <p className="muted">Descrição breve da vaga. Distância, horários e regras.</p>
        <div style={{marginTop:12}}>
          <button className="button-primary" onClick={()=>onReserve(spot)}>Reservar agora</button>
        </div>
      </div>
    </div>
  )
}
