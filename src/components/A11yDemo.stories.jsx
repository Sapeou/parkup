import React from 'react'

const meta = { title: 'Demo/A11y' }
export default meta

export const SemAlt = () => (
  <div style={{padding:20}}>
    <h2>Imagem sem alt (violation)</h2>
    <img src="https://picsum.photos/seed/a11y/400/200" />
  </div>
)

export const BaixoContraste = () => (
  <div style={{padding:20}}>
    <h2 style={{color:'#999'}}>Texto com baixo contraste (violation)</h2>
    <p style={{color:'#999'}}>Este parágrafo está em cinza claro sobre fundo branco — contraste insuficiente.</p>
  </div>
)
