import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <h1>Welcome to My Next.js App</h1>
        <p>This is a minimal app created from scratch.</p>

        <section style={{ marginTop: '1.5rem' }}>
          <h2>Client fetch example</h2>
          <ClientHello />
        </section>
      </main>
      <Footer />
    </>
  )
}

// small client component to call the API route
import { useState } from 'react'

function ClientHello() {
  const [msg, setMsg] = useState('Click the button to call /api/hello')

  async function callApi() {
    const res = await fetch('/api/hello')
    const data = await res.json()
    setMsg(data.message)
  }

  return (
    <div>
      <button onClick={callApi} style={{ padding: '8px 12px', cursor: 'pointer' }}>
        Call API
      </button>
      <p style={{ marginTop: '0.75rem' }}>{msg}</p>
    </div>
  )
}
