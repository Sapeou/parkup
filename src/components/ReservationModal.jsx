import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ReservationModal({spot,onClose}){
  const [confirmed, setConfirmed] = useState(false)

  useEffect(()=>{
    let t
    if(confirmed){
      // fecha o modal após breve confirmação
      t = setTimeout(()=>{
        onClose()
      }, 1100)
    }
    return ()=> clearTimeout(t)
  },[confirmed,onClose])

  function handleConfirm(){
    setConfirmed(true)
  }

  return (
    <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:999}}>
      <motion.div className="card" initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} exit={{y:20,opacity:0}} style={{width:360,borderRadius:12}}>
        {!confirmed ? (
          <div>
            <div style={{display:'flex',gap:12}}>
              <img src={spot.img} alt="spot" style={{width:100,height:80,objectFit:'cover',borderRadius:8}}/>
              <div>
                <div style={{fontWeight:700}}>{spot.title}</div>
                <div className="muted">R$ {spot.price} / hr</div>
              </div>
            </div>
            <div style={{marginTop:12,display:'flex',gap:8,justifyContent:'flex-end'}}>
              <button className="btn secondary" onClick={onClose} style={{padding:'8px 12px',borderRadius:8}}>Cancelar</button>
              <motion.button whileTap={{scale:0.96}} className="btn" style={{padding:'8px 12px',borderRadius:8}} onClick={handleConfirm}>Confirmar reserva</motion.button>
            </div>
          </div>
        ) : (
          <motion.div className="toast-success" initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} exit={{opacity:0}} style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:36,height:36,borderRadius:18,background:'var(--color-success)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div style={{fontWeight:700}}>Reserva confirmada</div>
              <div className="muted" style={{fontSize:12}}>Tudo certo — dirija-se à vaga no horário reservado</div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
