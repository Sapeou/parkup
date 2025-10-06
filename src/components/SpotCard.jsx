import React from 'react'
import { motion } from 'framer-motion'

export default function SpotCard({title,price,img,onReserve,onOpen}){
  return (
    <div className="card spot-card">
      <div className="spot-thumb" onClick={onOpen} style={{cursor:'pointer'}}>
        <img src={img} alt={title} style={{width:'100%',height:140,objectFit:'cover',borderRadius:8}} />
      </div>
      <div style={{marginTop:8,fontWeight:700}}>{title}</div>
      <div className="meta">
        <div className="muted">R$ {price} / hr</div>
        <motion.button whileTap={{scale:0.96}} className="button-primary" style={{height:36,padding:'0 12px',borderRadius:10}} onClick={()=>onReserve({title,price,img})}>Reservar</motion.button>
      </div>
    </div>
  )
}
