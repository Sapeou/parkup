import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import AppContext from '../state/AppContext'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default function MapPreview({height=240}){
  const {spots, selectSpot} = React.useContext(AppContext)

  if(!spots || spots.length === 0) return <div className="card">Sem pontos para mostrar</div>

  const center = [spots[0].lat || -23.55, spots[0].lng || -46.63]

  return (
    <MapContainer center={center} zoom={13} style={{height, width:'100%'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {spots.map(s=> (
        <Marker key={s.id} position={[s.lat || -23.55, s.lng || -46.63]}>
          <Popup>
            <div style={{width:180}}>
              <div style={{fontWeight:700}}>{s.title}</div>
              <div className="muted">R$ {s.price} / hr</div>
              <div style={{display:'flex',justifyContent:'flex-end',marginTop:8}}>
                <button className="btn" onClick={() => selectSpot(s)}>Ver</button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
