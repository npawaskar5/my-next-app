export const metadata = {
  title: 'My Next App',
  description: 'A simple Next.js app scaffold'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
