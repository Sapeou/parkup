import React from 'react'
import AppContext from '../state/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const {login} = React.useContext(AppContext)
  const [name,setName] = React.useState('')
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [agree,setAgree] = React.useState(false)
  const nav = useNavigate()

  function handle(e){
    e.preventDefault()
    if(!agree) return alert('Por favor, concorde com os Termos e Condições')
    // simple login/register mock
    login({name,email})
    nav('/profile')
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col items-center justify-center w-full max-w-md px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 py-8">
          <span className="material-symbols-outlined text-primary text-6xl">local_parking</span>
          <p className="text-white text-3xl font-black tracking-tighter">Estacionamento inteligente ao seu alcance</p>
          <p className="text-[#8db6ce] text-base font-normal leading-normal text-center">Crie uma conta ou faça login para encontrar, reservar e pagar por vagas de estacionamento.</p>
        </div>

        <div className="w-full">
          <div className="pb-3">
            <div className="flex border-b border-[#2e556b]">
              <a className="flex flex-col items-center justify-center border-b-2 border-b-primary text-white pb-3 pt-4 flex-1" href="#">
                <p className="text-sm font-bold tracking-wide">Registo</p>
              </a>
              <a className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-[#8db6ce] pb-3 pt-4 flex-1" href="#">
                <p className="text-sm font-bold tracking-wide">Login</p>
              </a>
            </div>
          </div>

          <form onSubmit={handle} className="flex flex-col gap-4 pt-4">
            <label className="flex flex-col">
              <p className="text-white text-sm font-medium leading-normal pb-2">Nome completo</p>
              <input className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#2e556b] bg-[#172a36] focus:border-primary h-12 placeholder:text-[#8db6ce] px-4 text-base font-normal" placeholder="Insira o seu nome completo" value={name} onChange={e=>setName(e.target.value)} required/>
            </label>

            <label className="flex flex-col">
              <p className="text-white text-sm font-medium leading-normal pb-2">Endereço de e-mail</p>
              <input type="email" className="form-input flex w-full resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#2e556b] bg-[#172a36] focus:border-primary h-12 placeholder:text-[#8db6ce] px-4 text-base font-normal" placeholder="Insira o seu e-mail" value={email} onChange={e=>setEmail(e.target.value)} required/>
            </label>

            <label className="flex flex-col">
              <p className="text-white text-sm font-medium leading-normal pb-2">Palavra-passe</p>
              <div className="flex w-full items-stretch">
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-white focus:outline-0 focus:ring-0 border border-[#2e556b] bg-[#172a36] focus:border-primary h-12 placeholder:text-[#8db6ce] px-4 border-r-0 text-base font-normal" placeholder="Insira a sua palavra-passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                <div className="text-[#8db6ce] flex border border-[#2e556b] bg-[#172a36] items-center justify-center px-3 rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined text-2xl">visibility_off</span>
                </div>
              </div>
            </label>

            <div className="flex items-center gap-2 pt-2">
              <input className="form-checkbox h-4 w-4 rounded bg-[#172a36] border-[#2e556b] text-primary focus:ring-primary" id="terms" type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)}/>
              <label className="text-[#8db6ce] text-sm" htmlFor="terms">Concordo com os <a className="text-white font-medium hover:underline" href="#">Termos e Condições</a>.</label>
            </div>

            <button className="flex items-center justify-center rounded-lg bg-primary text-white h-12 mt-4 text-base font-bold w-full hover:bg-primary/90 transition-colors" type="submit">Registar</button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-[#2e556b]"></div>
              <span className="flex-shrink mx-4 text-[#8db6ce] text-sm">Ou continue com</span>
              <div className="flex-grow border-t border-[#2e556b]"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="button" className="flex items-center justify-center gap-2 w-full h-12 rounded-lg border border-[#2e556b] bg-[#172a36] text-white hover:bg-[#213a48] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22h-1.5z" fill="#FFC107"></path><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22h-1.5z" fill="url(#paint0_linear_201_3)"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_201_3" x1="2" x2="46" y1="24" y2="24"><stop stopColor="#4285F4"></stop><stop offset="1" stopColor="#34A853"></stop></linearGradient></defs></svg>
                <span>Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 w-full h-12 rounded-lg border border-[#2e556b] bg-[#172a36] text-white hover:bg-[#213a48] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.016 6.435c-1.396 0-2.451-1.01-2.451-2.225s1.055-2.225 2.451-2.225c1.371 0 2.426 1.01 2.426 2.225s-1.055 2.225-2.426 2.225m3.238 3.518c.24.025.48.05.746.05.817 0 1.61-.125 2.327-.374-.148-1.584-.792-2.992-1.835-4.12-1.118-1.218-2.61-1.921-4.249-1.996-.271 1.243-.94 2.375-1.936 3.237-.746.623-1.635.972-2.574.972-1.321 0-2.548-.82-3.192-2.02-.915.424-1.782 1.022-2.523 1.768-1.118 1.118-1.91 2.548-2.25 4.145 1.51.05 2.968-.4 4.2-.972.571-1.267 1.836-2.146 3.338-2.146.423 0 .846.075 1.243.224m-3.238 11.972c.868 0 1.736-.2 2.524-.623.792.424 1.66.648 2.573.648 1.494 0 2.943-.473 4.145-1.42.025-.025.025-.025.025-.05 0-.05-.025-.074-.05-.123-.596-.746-1.118-1.61-1.509-2.548-.915.3-1.885.449-2.893.449-.77 0-1.535-.1-2.25-.3-1.04-.274-2.006-.77-2.843-1.445-1.243-1.018-2.055-2.4-2.225-3.92.025 0 .025 0 .05.025.1.024.174.024.273.024.965 0 1.91-.25 2.768-.746.94-.523 1.635-1.32 2.005-2.327-.523-1.71-1.81-3.042-3.486-3.793-1.372-.6-2.894-.82-4.397-.523-.274 2.03-.026 4.12 1.04 5.958 1.218 2.08 3.118 3.538 5.353 4.17z"></path></svg>
                <span>Apple</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
