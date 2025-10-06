import React from 'react'

const AppContext = React.createContext()

export function AppProvider({children}){
  const [user, setUser] = React.useState(null)
  const [spots, setSpots] = React.useState([
    { id: 's1', title: 'Vaga Coberta - Centro', price: 6.5, img: 'https://picsum.photos/seed/rs1/600/400' },
    { id: 's2', title: 'Vaga Descoberta - Bairro Alto', price: 4, img: 'https://picsum.photos/seed/rs2/600/400' },
  ])
  const [reservations, setReservations] = React.useState([])

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

  return (
    <AppContext.Provider value={{user,login,logout,spots,createSpot,reservations,reserveSpot}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
