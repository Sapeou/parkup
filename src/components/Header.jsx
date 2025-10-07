import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../state/AppContext'

export default function Header({ brand = 'Parkup', onLogin = () => {} }) {
  const { user, logout } = React.useContext(AppContext)

  return (
    <header className="header container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div className="logo" style={{display:'flex',alignItems:'center',gap:12}}>
        <div className="brand-mark" style={{width:40,height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <svg className="text-secondary" height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
        </div>
        <div>
          <div className="brand-title" style={{fontWeight:700}}>{brand}</div>
        </div>
      </div>
      <nav className="nav-links" style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link to="/" style={{textDecoration:'none'}}>Como Funciona</Link>
        <Link to="/reservations" style={{textDecoration:'none'}}>Minhas Reservas</Link>
        <Link to="/create" style={{textDecoration:'none'}}>Seja Parceiro</Link>
        {!user ? (
          <Link to="/register"><button className="btn">Entrar / Cadastrar</button></Link>
        ) : (
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <span className="muted">{user.name}</span>
            <button className="btn" onClick={logout}>Sair</button>
          </div>
        )}
      </nav>
    </header>
  )
}
