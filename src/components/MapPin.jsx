import React from 'react'

export default function MapPin({label}){
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div style={{width:14,height:14,borderRadius:7,background:'var(--color-secondary)',boxShadow:'0 2px 6px rgba(0,0,0,0.12)'}}></div>
      <div style={{fontSize:12,marginTop:6}}>{label}</div>
    </div>
  )
}
