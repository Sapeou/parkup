import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden" style={{background:'var(--color-white)'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="fixed top-0 left-0 right-0 z-50" style={{background:'rgba(255,255,255,1)',backdropFilter:'none'}}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 border-b border-neutral-light dark:border-neutral-dark/40">
              <div className="flex items-center gap-3">
                <svg className="text-secondary" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
                <h2 className="text-secondary text-2xl font-heading font-bold">Parkup</h2>
              </div>
              <nav className="hidden lg:flex items-center gap-8">
                <a className="text-text-light dark:text-text-dark hover:text-secondary dark:hover:text-primary text-base font-medium" href="#">Como Funciona</a>
                <a className="text-text-light dark:text-text-dark hover:text-secondary dark:hover:text-primary text-base font-medium" href="#">Seja Parceiro</a>
                <a className="text-text-light dark:text-text-dark hover:text-secondary dark:hover:text-primary text-base font-medium" href="#">Baixar App</a>
                <Link to="/register" className="flex min-w-[90px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white dark:hover:text-background-dark text-base font-bold transition-all duration-300">
                  <span className="truncate">Entrar</span>
                </Link>
              </nav>
              <div className="lg:hidden">
                <button className="material-symbols-outlined text-3xl">menu</button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1" style={{paddingTop:80}}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20 lg:py-32">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark tracking-tight leading-tight">Estacione fácil. <br className="hidden lg:block"/>Compartilhe melhor.</h1>
                <p className="mt-6 text-lg text-text-light/80 dark:text-text-dark/80 max-w-lg mx-auto lg:mx-0">Encontre e reserve vagas de estacionamento em segundos com Parkup. Simplifique sua vida e economize tempo.</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold shadow-soft hover:scale-105 transition-transform duration-300">Encontrar vaga agora</button>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative z-0 w-[300px] h-[600px] lg:w-[350px] lg:h-[700px]">
                  <div className="absolute inset-0 bg-neutral-dark rounded-[40px] shadow-2xl transform rotate-3"></div>
                  <div className="absolute inset-0 bg-neutral-dark/80 rounded-[40px] shadow-2xl transform -rotate-3"></div>
                      <div className="relative w-full h-full rounded-[40px] border-4 border-neutral-dark p-4 flex flex-col" style={{background:'#f7f8fa'}}>
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-lg"></div>
                        <div className="flex-1 bg-center bg-no-repeat bg-cover rounded-3xl" aria-hidden="true">
                          {/* placeholder area for an illustration - keep empty so nothing from behind shows through */}
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}