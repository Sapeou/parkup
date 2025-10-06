import React from 'react'
import MapView from './MapView'

const meta = { title: 'Pages/MapView', component: MapView }
export default meta

export const Default = (args) => <MapView {...args} />
Default.args = { onBack: () => alert('Fechar mapa (story)') }
