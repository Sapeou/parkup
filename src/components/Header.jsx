import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ brand = 'Parkup', onLogin = () => {} }) {
  return (
    <header className="header container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div className="logo" style={{display:'flex',alignItems:'center',gap:12}}>
        <div className="brand-mark" style={{width:40,height:40,background:'#111',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:8}}>{brand[0]}</div>
        <div>
          <div className="brand-title" style={{fontWeight:700}}>{brand}</div>
        </div>
      </div>
      <nav className="nav-links" style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link to="/" style={{textDecoration:'none'}}>Como Funciona</Link>
        <a style={{cursor:'pointer'}}>Seja Parceiro</a>
        <button className="button-primary" onClick={onLogin}>Entrar</button>
      </nav>
    </header>
  )
}
