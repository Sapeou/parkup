import React from 'react'
import AppContext from '../state/AppContext'

export default function CreateSpot(){
  const {createSpot} = React.useContext(AppContext)
  const [title,setTitle] = React.useState('')
  const [price,setPrice] = React.useState('')
  const [img,setImg] = React.useState('')
  const [lat,setLat] = React.useState('')
  const [lng,setLng] = React.useState('')
  const [address,setAddress] = React.useState('')
  const [saved,setSaved] = React.useState(null)
  const [geocoding, setGeocoding] = React.useState(false)

  async function geocode(){
    if(!address) return
    setGeocoding(true)
    try{
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      const res = await fetch(url, { headers: { 'User-Agent': 'Parkup-Design-Starter' }})
      const data = await res.json()
      if(data && data[0]){
        setLat(data[0].lat)
        setLng(data[0].lon)
      }
    }catch(e){ console.error(e) }
    setGeocoding(false)
  }

  function handleSubmit(e){
    e.preventDefault()
    const s = createSpot({title,price:parseFloat(price)||0,img: img || 'https://picsum.photos/seed/new/600/400', lat: parseFloat(lat)||undefined, lng: parseFloat(lng)||undefined})
    setSaved(s)
    setTitle(''); setPrice(''); setImg(''); setLat(''); setLng(''); setAddress('')
  }

  return (
    <div className="container">
      <h2>Cadastrar Vaga (Parceiro)</h2>
      <div className="card" style={{padding:16}}>
        <form onSubmit={handleSubmit} style={{display:'grid',gap:8}}>
          <label>Nome da vaga <input value={title} onChange={e=>setTitle(e.target.value)} required/></label>
          <label>Preço / hr <input value={price} onChange={e=>setPrice(e.target.value)} required/></label>
          <label>Imagem (URL) <input value={img} onChange={e=>setImg(e.target.value)} /></label>
          <label>Endereço (opcional, geocode) <input value={address} onChange={e=>setAddress(e.target.value)} placeholder="Rua, número, cidade"/></label>
          <div style={{display:'flex',gap:8}}>
            <input placeholder="Lat" value={lat} onChange={e=>setLat(e.target.value)} />
            <input placeholder="Lng" value={lng} onChange={e=>setLng(e.target.value)} />
            <button type="button" className="btn secondary" onClick={geocode} disabled={geocoding}>{geocoding ? 'Buscando...' : 'Buscar coords'}</button>
          </div>
          <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
            <button type="submit" className="btn">Salvar vaga</button>
          </div>
        </form>
        {saved && <div style={{marginTop:12}} className="toast-success">Vaga criada: {saved.title}</div>}
      </div>
    </div>
  )
}
