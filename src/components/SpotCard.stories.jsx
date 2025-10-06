import React from 'react'
import SpotCard from './SpotCard'

const meta = {
  title: 'Components/SpotCard',
  component: SpotCard,
}

export default meta

const sample = {
  id: 's1',
  title: 'Vaga coberta - Centro',
  price: 6.5,
  distance: '120m',
  available: true,
  tags: ['coberta', '24h'],
  img: 'https://picsum.photos/seed/spot1/600/400'
}

const Template = (args) => {
  const spot = { ...sample, ...args }
  return (
    <div style={{ width: 320 }}>
      <SpotCard title={spot.title} price={spot.price} img={spot.img} onReserve={() => alert('Reservar (story)')} onOpen={() => alert('Abrir (story)')} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = { title: sample.title, price: sample.price, img: sample.img }

export const Empty = () => (
  <div style={{ width: 320 }}>
    <SpotCard title={''} price={0} img={''} onReserve={() => {}} />
  </div>
)
