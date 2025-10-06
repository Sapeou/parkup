import React from 'react'
import MapView from './MapView'
import { AppProvider } from '../state/AppContext'

export default {
  title: 'Pages/MapView',
  component: MapView,
}

export const Default = () => (
  <AppProvider>
    <div style={{width:800,height:500}}>
      <MapView onBack={() => {}} />
    </div>
  </AppProvider>
)
