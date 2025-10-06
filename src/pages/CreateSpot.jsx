import React from 'react'
import AppContext from '../state/AppContext'

export default function CreateSpot(){
  const {createSpot} = React.useContext(AppContext)
  const [title,setTitle] = React.useState('')
  const [price,setPrice] = React.useState('')
  const [img,setImg] = React.useState('')
  const [saved,setSaved] = React.useState(null)

  function handleSubmit(e){
    e.preventDefault()
    const s = createSpot({title,price:parseFloat(price)||0,img: img || 'https://picsum.photos/seed/new/600/400'})
    setSaved(s)
    setTitle(''); setPrice(''); setImg('')
  }

  return (
    <div className="container">
      <h2>Cadastrar Vaga (Parceiro)</h2>
      <div className="card" style={{padding:16}}>
        <form onSubmit={handleSubmit} style={{display:'grid',gap:8}}>
          <label>Nome da vaga <input value={title} onChange={e=>setTitle(e.target.value)} /></label>
          <label>Preço / hr <input value={price} onChange={e=>setPrice(e.target.value)} /></label>
          <label>Imagem (URL) <input value={img} onChange={e=>setImg(e.target.value)} /></label>
          <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
            <button type="submit" className="btn">Salvar vaga</button>
          </div>
        </form>
        {saved && <div style={{marginTop:12}} className="toast-success">Vaga criada: {saved.title}</div>}
      </div>
    </div>
  )
}
