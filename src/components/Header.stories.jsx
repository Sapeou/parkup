import React from 'react'
import Header from './Header'

const meta = {
  title: 'Components/Header',
  component: Header,
}

export default meta

export const Default = (args) => <Header {...args} />
Default.args = {
  brand: 'Parkup',
  onLogin: () => alert('Login clicked (story)')
}
