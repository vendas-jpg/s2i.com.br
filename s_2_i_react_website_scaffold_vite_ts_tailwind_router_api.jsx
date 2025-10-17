# S2i React Website – Scaffold

Below is a complete project scaffold you can paste into a new Git repo. It uses **Vite + React + TypeScript + TailwindCSS + React Router (HashRouter)** and includes an optional **/api/send-email** serverless function (for Vercel) to deliver the contact form to **contato@s2i.com.br** via **Resend**. If you host on GitHub Pages only, the form gracefully falls back to a `mailto:` link and WhatsApp CTA.

---
## 📁 Project Structure
```
s2i-website/
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ index.html
├─ postcss.config.js
├─ tailwind.config.js
├─ .gitignore
├─ .env.example
├─ README.md
├─ public/
│  ├─ logos/
│  │  ├─ banner.png
│  │  ├─ turck.png
│  │  ├─ wago.png
│  │  └─ pizzato.png
│  └─ favicon.svg
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ styles.css
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Section.tsx
│  │  └─ ManufacturerCard.tsx
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Manufacturers.tsx
│  │  └─ Contact.tsx
│  └─ data/
│     └─ manufacturers.ts
└─ api/
   └─ send-email.ts  (Serverless function for Vercel/Node)
```

---
## 📦 package.json
```json
{
  "name": "s2i-website",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.2",
    "vite": "^5.4.8"
  }
}
```

---
## 🧰 vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './' // friendly for GitHub Pages when using HashRouter
})
```

---
## 🧪 tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

---
## 🧪 tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

---
## 🌐 index.html
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>S2i – Distribuição Industrial</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---
## 🎨 Tailwind setup
### postcss.config.js
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        s2iblue: '#0E4DA4',
        s2iyellow: '#FFCC00',
        s2igray: '#0F172A'
      }
    },
  },
  plugins: [],
}
```

### src/styles.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

body { @apply bg-white text-slate-800; }
.container { @apply max-w-6xl mx-auto px-4; }
.btn { @apply inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm hover:shadow transition; }
.btn-primary { @apply btn bg-s2iblue text-white; }
.btn-outline { @apply btn border border-slate-300 bg-white; }
.card { @apply rounded-2xl border border-slate-200 p-6 shadow-sm bg-white; }
.section { @apply py-16; }
.h1 { @apply text-3xl md:text-4xl font-bold; }
.h2 { @apply text-2xl md:text-3xl font-semibold; }
.lead { @apply text-lg text-slate-600; }
```

---
## 🔑 .env.example
```
# Used by /api/send-email when deploying on Vercel or other Node host
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=contato@s2i.com.br
CONTACT_FROM=site@s2i.com.br
```

---
## 🚀 src/main.tsx
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
```

---
## 🧭 src/App.tsx
```tsx
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Manufacturers from './pages/Manufacturers'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/fabricantes" element={<Manufacturers />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
```

---
## 🧩 src/components/Navbar.tsx
```tsx
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-xl ${isActive ? 'bg-s2iblue text-white' : 'text-slate-700 hover:bg-slate-200'}`

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.svg" alt="S2i" className="h-8 w-8" />
          <span className="font-bold text-s2iblue">S2i – Distribuição Industrial</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>Início</NavLink>
          <NavLink to="/quem-somos" className={linkClass}>Quem Somos</NavLink>
          <NavLink to="/fabricantes" className={linkClass}>Fabricantes</NavLink>
          <NavLink to="/contato" className={linkClass}>Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}
```

---
## 🧩 src/components/Footer.tsx
```tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-semibold text-s2iblue">S2i – Distribuição Industrial</div>
          <div className="text-slate-600 mt-2">Rua 1-N, 928, Setor Oeste – Goiânia • (62) 98116-4440 • vendas@s2i.com.br</div>
        </div>
        <div>
          <div className="font-semibold">Atendimento</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><a className="hover:underline" href="https://wa.me/5562981164440" target="_blank">WhatsApp</a></li>
            <li><a className="hover:underline" href="mailto:contato@s2i.com.br">contato@s2i.com.br</a></li>
          </ul>
        </div>
        <div className="text-slate-500 md:text-right">© {new Date().getFullYear()} S2i. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}
```

---
## 🧩 src/components/Section.tsx
```tsx
import { PropsWithChildren } from 'react'

export default function Section({ title, subtitle, children }: PropsWithChildren<{ title: string, subtitle?: string }>) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{title}</h2>
        {subtitle && <p className="lead mt-2">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
```

---
## 🧩 src/components/ManufacturerCard.tsx
```tsx
type Props = { name: string; site: string; logo: string; }

export default function ManufacturerCard({ name, site, logo }: Props) {
  return (
    <a href={site} target="_blank" className="card flex items-center gap-4 hover:shadow-md">
      <img src={logo} alt={name} className="h-12 w-auto" />
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-slate-500 text-sm">Visitar site oficial</div>
      </div>
    </a>
  )
}
```

---
## 🗂️ src/data/manufacturers.ts
```ts
export type Manufacturer = { name: string; site: string; logo: string }

export const manufacturers: Manufacturer[] = [
  { name: 'Banner Engineering', site: 'https://www.bannerengineering.com', logo: '/logos/banner.png' },
  { name: 'Turck', site: 'https://www.turck.com', logo: '/logos/turck.png' },
  { name: 'WAGO', site: 'https://www.wago.com', logo: '/logos/wago.png' },
  { name: 'Pizzato Elettrica', site: 'https://www.pizzato.com', logo: '/logos/pizzato.png' },
]
```

---
## 📄 src/pages/Home.tsx
```tsx
import Section from '@/components/Section'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
        <div className="container py-20 text-center">
          <h1 className="h1">S2i – Distribuição Industrial</h1>
          <p className="lead mt-4 max-w-3xl mx-auto">
            Especialistas em sensores, segurança de máquinas e soluções de automação industrial. 
            Atendemos o Centro-Oeste com estoque local, consultoria técnica e integração.
          </p>
          <div className="mt-8 flex gap-3 justify-center">
            <Link to="/quem-somos" className="btn-primary">Quem Somos</Link>
            <Link to="/fabricantes" className="btn-outline">Nossos Fabricantes</Link>
            <Link to="/contato" className="btn-outline">Fale Conosco</Link>
          </div>
        </div>
      </section>

      <Section title="Áreas de Atuação" subtitle="Alimentos & Bebidas, Agronegócio, Embalagens, Automotivo, Energia e mais.">
        <div className="grid md:grid-cols-3 gap-6">
          {['Sensores Industriais', 'Segurança NR-12', 'Redes/IO-Link', 'RFID/Identificação', 'Fontes/Bornes', 'Serviços/Consultoria'].map((t) => (
            <div key={t} className="card text-center">
              <div className="text-lg font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
```

---
## 📄 src/pages/About.tsx (Quem Somos, Valores, Área de Atuação)
```tsx
import Section from '@/components/Section'

export default function About() {
  return (
    <>
      <Section title="Quem Somos" subtitle="Comprometidos em fortalecer a indústria brasileira com tecnologia e inovação.">
        <p className="text-slate-700">
          A <strong>S2i – Distribuição Industrial</strong> é parceira técnica de fabricantes globais, oferecendo 
          sensores, soluções de segurança, conectividade e serviços de integração. Com base em Goiânia, atendemos o 
          Centro-Oeste com <strong>estoque local</strong>, <strong>time especializado</strong> e suporte próximo ao cliente.
        </p>
      </Section>

      <Section title="Nossos Valores">
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-slate-700">
          <li>Excelência técnica e confiabilidade</li>
          <li>Parcerias de longo prazo e integridade</li>
          <li>Segurança e conformidade (NR-12)</li>
          <li>Agilidade com foco no resultado do cliente</li>
        </ul>
      </Section>

      <Section title="Área de Atuação">
        <p className="text-slate-700">
          Foco em <strong>TA</strong> (Tecnologia de Automação) integrando-se com TI quando necessário. Projetos em
          Alimentos & Bebidas, Agronegócio, Frigoríficos, Embalagens, Bebidas, Energia, entre outros.
        </p>
      </Section>
    </>
  )
}
```

---
## 📄 src/pages/Manufacturers.tsx
```tsx
import Section from '@/components/Section'
import ManufacturerCard from '@/components/ManufacturerCard'
import { manufacturers } from '@/data/manufacturers'

export default function Manufacturers() {
  return (
    <Section title="Nossos Fabricantes" subtitle="Clique para acessar o site oficial de cada parceiro.">
      <div className="grid md:grid-cols-2 gap-6">
        {manufacturers.map((m) => (
          <ManufacturerCard key={m.name} {...m} />
        ))}
      </div>
    </Section>
  )
}
```

---
## 📄 src/pages/Contact.tsx
```tsx
import { useState } from 'react'
import Section from '@/components/Section'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('sending')

    // Try serverless API first (works on Vercel/Node hosts). If it fails, we fall back to mailto
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries() as any)),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
      return
    } catch (err) {
      setStatus('error')
      // Fallback: open mailto with the collected fields
      const name = formData.get('name')
      const email = formData.get('email')
      const phone = formData.get('phone')
      const message = formData.get('message')
      const subject = encodeURIComponent('Contato via site S2i')
      const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`)
      window.location.href = `mailto:contato@s2i.com.br?subject=${subject}&body=${body}`
    }
  }

  return (
    <Section title="Contato" subtitle="Fale com nosso time técnico e comercial.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <div className="space-y-2 text-slate-700">
            <div><strong>E-mail:</strong> <a className="text-s2iblue hover:underline" href="mailto:contato@s2i.com.br">contato@s2i.com.br</a></div>
            <div><strong>WhatsApp:</strong> <a className="text-s2iblue hover:underline" href="https://wa.me/5562981164440" target="_blank">(62) 98116-4440</a></div>
            <div><strong>Endereço:</strong> Rua 1-N, 928, Setor Oeste – Goiânia, GO</div>
          </div>
          <a className="btn-primary mt-6 inline-block" href="https://wa.me/5562981164440" target="_blank">Chamar no WhatsApp</a>
        </div>

        <form onSubmit={onSubmit} className="card grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input required name="name" className="w-full rounded-xl border border-slate-300 px-3 py-2" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input required type="email" name="email" className="w-full rounded-xl border border-slate-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input name="phone" className="w-full rounded-xl border border-slate-300 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea required name="message" rows={5} className="w-full rounded-xl border border-slate-300 px-3 py-2" />
          </div>

          <button disabled={status==='sending'} className="btn-primary">
            {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
          </button>

          {status === 'sent' && <p className="text-green-600">Mensagem enviada com sucesso!</p>}
          {status === 'error' && <p className="text-amber-600">Não foi possível enviar via servidor. Abrimos seu app de e-mail como alternativa.</p>}
        </form>
      </div>
    </Section>
  )
}
```

---
## 📨 api/send-email.ts (Serverless – optional)
> Use quando hospedar no **Vercel** ou outro host com funções Node. Envia e-mails via **Resend**.
```ts
// api/send-email.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed')

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    return res.status(500).json({ error: 'Missing env vars' })
  }

  const { name, email, phone, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Invalid payload' })

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        subject: `Contato via site – ${name}`,
        text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || ''}\n\nMensagem:\n${message}`,
      })
    })

    if (!resp.ok) {
      const text = await resp.text()
      return res.status(500).json({ error: 'Resend failed', detail: text })
    }

    return res.status(200).json({ ok: true })
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Unknown error' })
  }
}
```

---
## 🧻 .gitignore
```gitignore
node_modules
.dist
.DS_Store
.env
.vercel
```

---
## 📝 README.md (Quick Start)
```md
# S2i – Website (Vite + React + TS)

## Desenvolvimento
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy – GitHub Pages
- Este projeto usa **HashRouter**, então não precisa de configurações especiais de 404.
- Habilite GitHub Pages no repositório (branch `gh-pages` ou `docs/`).

## Deploy – Vercel (recomendado para formulário)
- Defina env vars: `RESEND_API_KEY`, `CONTACT_TO=contato@s2i.com.br`, `CONTACT_FROM=site@s2i.com.br`.
- Deploy e teste `POST /api/send-email`.
- No front, já tenta a API e faz fallback para `mailto:` caso indisponível.

## Personalização
- Substitua logos em `public/logos/*`.
- Edite conteúdo em `src/pages/*` e `src/data/manufacturers.ts`.
```

---
## 🧿 public/favicon.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#0E4DA4"/>
      <stop offset="1" stop-color="#FFCC00"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="12" fill="url(#g)"/>
  <path d="M14 40h20a10 10 0 0 0 0-20H18" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
  <circle cx="18" cy="20" r="3" fill="#fff"/>
</svg>
```

---

### Notes
- Coloque os arquivos de logo reais em `public/logos/` com os nomes já referenciados.
- Atualize os contatos/endereços conforme necessário.
- Caso deseje SEO e meta tags sociais, adicione-as em `index.html`.
