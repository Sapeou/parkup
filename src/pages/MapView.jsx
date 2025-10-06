import React from 'react'

export default function MapView({onBack}){
  return (
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>Mapa</h2>
        <button className="button-ghost" onClick={onBack}>Fechar</button>
      </div>
      <div className="card" style={{height:400,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div>Mapa interativo (a ser integrado com Leaflet/Mapbox)</div>
      </div>
    </div>
  )
}
