import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import AppContext from '../state/AppContext'
import L from 'leaflet'

// Fix default icon path issues for leaflet in many bundlers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default function MapView({onBack}){
  const {spots, selectSpot} = React.useContext(AppContext)

  // sample coords if not provided
  const seeded = spots.map((s,i)=>({
    ...s,
    lat: s.lat || -23.55 + (i*0.005),
    lng: s.lng || -46.63 + (i*0.005)
  }))

  const center = [seeded[0].lat, seeded[0].lng]

  return (
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>Mapa</h2>
        <button className="btn" onClick={onBack}>Fechar</button>
      </div>
      <div className="card" style={{height:480,overflow:'hidden',marginTop:12}}>
        <MapContainer center={center} zoom={14} style={{height:'100%',width:'100%'}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {seeded.map(s=> (
            <Marker key={s.id} position={[s.lat,s.lng]}>
              <Popup>
                <div style={{width:200}}>
                  <div style={{fontWeight:700}}>{s.title}</div>
                  <div className="muted">R$ {s.price} / hr</div>
                  <div style={{marginTop:8,display:'flex',justifyContent:'flex-end'}}>
                    <button className="btn" onClick={() => selectSpot(s)}>Ver</button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}
