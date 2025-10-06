import React from 'react'

const AppContext = React.createContext()

function safeParse(v, fallback){
  try{ return JSON.parse(v) }catch(e){ return fallback }
}

export function AppProvider({children}){
  // hydrate from localStorage when possible
  const [user, setUser] = React.useState(()=> safeParse(localStorage.getItem('parkup:user'), null))
  const [spots, setSpots] = React.useState(()=> safeParse(localStorage.getItem('parkup:spots'), [
    { id: 's1', title: 'Vaga Coberta - Centro', price: 6.5, img: 'https://picsum.photos/seed/rs1/600/400', lat: -23.55052, lng: -46.633308 },
    { id: 's2', title: 'Vaga Rio - Copacabana', price: 8, img: 'https://picsum.photos/seed/rs2/600/400', lat: -22.971177, lng: -43.182543 },
  ]))
  const [reservations, setReservations] = React.useState(()=> safeParse(localStorage.getItem('parkup:reservations'), []))
  const [selectedSpot, setSelectedSpot] = React.useState(()=> safeParse(localStorage.getItem('parkup:selectedSpot'), null))

  // persist when these change
  React.useEffect(()=> localStorage.setItem('parkup:user', JSON.stringify(user)), [user])
  React.useEffect(()=> localStorage.setItem('parkup:spots', JSON.stringify(spots)), [spots])
  React.useEffect(()=> localStorage.setItem('parkup:reservations', JSON.stringify(reservations)), [reservations])
  React.useEffect(()=> localStorage.setItem('parkup:selectedSpot', JSON.stringify(selectedSpot)), [selectedSpot])

  function login({name,email}){
    const u = {name,email}
    setUser(u)
    return u
  }

  function logout(){ setUser(null) }

  function createSpot(data){
    const s = { id: 's' + (spots.length+1), ...data }
    setSpots(p=>[s,...p])
    return s
  }

  function reserveSpot(spot, when = new Date()){
    const r = { id: 'r' + (reservations.length+1), spot, when }
    setReservations(p=>[r,...p])
    return r
  }

  function selectSpot(spot){
    setSelectedSpot(spot)
  }

  return (
    <AppContext.Provider value={{user,login,logout,spots,createSpot,reservations,reserveSpot,selectedSpot,selectSpot}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
