import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
    </nav>
  )
}
