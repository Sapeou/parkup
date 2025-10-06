import React from 'react'
import SpotDetails from './SpotDetails'

const meta = { title: 'Pages/SpotDetails', component: SpotDetails }
export default meta

const sample = { title: 'Vaga coberta - Centro', price: 6.5, img: 'https://picsum.photos/seed/spot2/800/400' }

export const Default = (args) => <SpotDetails {...args} />
Default.args = { spot: sample, onReserve: (s) => alert('Reservar ' + s.title) }
