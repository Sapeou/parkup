import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './app.css'
import ReservationModal from './components/ReservationModal'
import Home from './pages/Home'
import SpotDetails from './pages/SpotDetails'
import MapView from './pages/MapView'
import Profile from './pages/Profile'
import Login from './pages/Login'

function Header({navigate}){
  return (
    <header className="header container">
      <div className="logo">
        <div className="brand-mark">P</div>
        <div>
          <div className="brand-title">Parkup</div>
        </div>
      </div>
      <nav className="nav-links">
        <a onClick={()=>navigate('home')}>Como Funciona</a>
        <a onClick={()=>navigate('become')}>Seja Parceiro</a>
        <button className="button-primary" onClick={()=>navigate('login')}>Entrar</button>
      </nav>
    </header>
  )
}

function SpotCard({title,price,img,onReserve}){
  return (
    <div className="card">
      <img src={img} alt="spot" />
      <div style={{marginTop:12,fontWeight:700}}>{title}</div>
      <div className="meta">
        <div className="muted">R$ {price} / hr</div>
        <motion.button whileTap={{scale:0.96}} className="button-primary" style={{height:36,padding:'0 12px',borderRadius:10}} onClick={()=>onReserve({title,price,img})}>Reservar</motion.button>
      </div>
    </div>
  )
}

export default function App(){
  const [selected, setSelected] = React.useState(null)
  const [route, setRoute] = React.useState('home') // 'home' | 'map' | 'spot' | 'profile' | 'login'
  const [activeSpot, setActiveSpot] = React.useState(null)

  const handleReserve = (spot)=>{
    setSelected(spot)
  }

  const closeModal = ()=> setSelected(null)

  const navigate = (to)=> setRoute(to)

  const openSpot = (title)=>{
    // for demo, create a small spot object
    const spot = { title, price: '6.5', img: 'https://picsum.photos/seed/rs1/600/400' }
    setActiveSpot(spot)
    setRoute('spot')
  }

  return (
    <div className="body-base">
      <Header navigate={navigate} />
      <main className="container">
        {route === 'home' && (
          <Home onReserve={handleReserve} openMap={()=>setRoute('map')} openSpot={openSpot} />
        )}

        {route === 'map' && (
          <MapView onBack={()=>setRoute('home')} />
        )}

        {route === 'spot' && (
          <SpotDetails spot={activeSpot} onReserve={handleReserve} />
        )}

        {route === 'profile' && (
          <Profile />
        )}

        {route === 'login' && (
          <Login onLogin={()=>setRoute('profile')} />
        )}
      </main>

      <AnimatePresence>
        {selected && (
          <ReservationModal spot={selected} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  )
}
