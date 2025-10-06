import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './app.css'
import ReservationModal from './components/ReservationModal'
import Header from './components/Header'
import Home from './pages/Home'
import SpotDetails from './pages/SpotDetails'
import MapView from './pages/MapView'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Reservations from './pages/Reservations'
import CreateSpot from './pages/CreateSpot'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AppContext from './state/AppContext'

export default function App(){
  const [selected, setSelected] = React.useState(null)
  const [activeSpot, setActiveSpot] = React.useState(null)
  const navigate = useNavigate()

  const handleReserve = (spot)=>{
    setSelected(spot)
  }

  const closeModal = ()=> setSelected(null)

  const {reserveSpot, spots} = React.useContext(AppContext)

  const openSpot = (title)=>{
    // for demo, select a real spot from context if exists
    const spot = spots.find(s=>s.title === title) || { title, price: '6.5', img: 'https://picsum.photos/seed/rs1/600/400' }
    setActiveSpot(spot)
    navigate('/spot')
  }

  return (
    <div className="body-base">
      <Header onLogin={()=>navigate('/login')} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home onReserve={handleReserve} openMap={()=>navigate('/map')} openSpot={openSpot} />} />
          <Route path="/map" element={<MapView onBack={()=>navigate('/')} />} />
          <Route path="/spot" element={<SpotDetails spot={activeSpot} onReserve={handleReserve} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login onLogin={()=>navigate('/profile')} />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/create" element={<CreateSpot />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <AnimatePresence>
        {selected && (
          <ReservationModal spot={selected} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  )
}
