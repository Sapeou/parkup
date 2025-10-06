import React from 'react'
import ReservationModal from './ReservationModal'

const meta = {
  title: 'Components/ReservationModal',
  component: ReservationModal,
}

export default meta

const sampleSpot = { title: 'Vaga Coberta - Centro', price: 6.5, img: 'https://picsum.photos/seed/story2/600/400' }

export const Aberto = (args) => {
  return (
    <div style={{padding:20}}>
      <ReservationModal {...args} />
    </div>
  )
}
Aberto.args = { spot: sampleSpot, onClose: () => {} }

export const Confirmado = () => (
  <div style={{padding:20}}>
    <div style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{width:360,borderRadius:12,padding:16,background:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:36,height:36,borderRadius:18,background:'var(--color-success)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <div style={{fontWeight:700}}>Reserva confirmada</div>
            <div style={{fontSize:12,color:'#666'}}>Tudo certo — dirija-se à vaga no horário reservado</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
