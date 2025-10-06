# Parkup Design Starter

Pequeno starter com React + Framer Motion para demonstrar componentes do design system do Parkup.

Como executar (Windows PowerShell):

1. Ir para a pasta do starter:

   cd "C:/Users/MaiconMagnoMAGPASS/MAGPASS - INFORMATICA LTDA/ADMINISTRACAO - Documentos/PARKUP - SEU ESTACIONAMENTO/Sistema/parkup-sistema-completo/parkup/parkup-design-starter"

2. Instalar dependências (via npm):

   npm install

3. Rodar em modo dev:

   npm start

O projeto usa Parcel para bundling e abre automaticamente no navegador.

Storybook
--------

Como rodar Storybook em desenvolvimento:

1. Instalar dependências (se ainda não fez):

   npm install

2. Rodar Storybook:

```powershell
npx storybook dev -p 6006
```

Abra http://localhost:6006 no navegador.

Gerar build estático do Storybook (para deploy):

```powershell
npx storybook build
```

Troubleshooting rápido
- Se o npm reclamar de ERESOLVE ao instalar dependências, tente:

```powershell
npm install --legacy-peer-deps
```

- Se componentes derivarem de um Router ou de contexts (ex.: erro `useContext`), o Storybook tem um decorator global pronto em `.storybook/preview.mjs` que envolve as stories com um `MemoryRouter` e um `ThemeProvider` mínimo. Se você preferir o `MemoryRouter` real, instale `react-router-dom`:

```powershell
npm install react-router-dom --legacy-peer-deps
```

- Se houver múltiplas instâncias de React (hooks/context falhando), adicionamos aliases em `vite.config.js` para forçar a resolução ao `node_modules` local. Normalmente não é necessário mexer nisso, mas deixamos a configuração como referência.

