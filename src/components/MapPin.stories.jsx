import React from 'react'
import MapPin from './MapPin'

export default {
  title: 'Componentes/MapPin',
  component: MapPin,
  argTypes: {
    label: { control: 'text' },
  },
}

const Template = (args) => <MapPin {...args} />

export const ComLabel = Template.bind({})
ComLabel.args = { label: 'A' }

export const SemLabel = Template.bind({})
SemLabel.args = { label: '' }
