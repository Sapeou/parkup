import React from 'react'
import SpotCard from '../components/SpotCard'

export default function Home({onReserve, openMap, openSpot}){
  return (
    <div>
      <section className="hero">
        <div style={{flex:1}}>
          <h1 className="brand-title">Encontre sua vaga rápida</h1>
          <p className="muted">Filtre por proximidade, cobertura e preço.</p>
          <div style={{marginTop:16}}>
            <button className="button-primary" onClick={openMap}>Abrir mapa</button>
          </div>
        </div>
        <div style={{width:'48%',minWidth:300}}>
          <div className="map-placeholder card">Mapa interativo (preview)</div>
        </div>
      </section>

      <section style={{marginTop:32}}>
        <h2>Vagas próximas</h2>
        <div className="card-grid" style={{marginTop:12}}>
          <SpotCard title="Vaga Coberta - Centro" price="6.5" img="https://picsum.photos/seed/rs1/600/400" onReserve={onReserve} onOpen={()=>openSpot('Vaga Coberta - Centro')} />
          <SpotCard title="Vaga Descoberta - Bairro Alto" price="4" img="https://picsum.photos/seed/rs2/600/400" onReserve={onReserve} onOpen={()=>openSpot('Vaga Descoberta - Bairro Alto')} />
          <SpotCard title="Vaga Privada - Estúdio" price="8" img="https://picsum.photos/seed/rs3/600/400" onReserve={onReserve} onOpen={()=>openSpot('Vaga Privada - Estúdio')} />
        </div>
      </section>
    </div>
  )
}
