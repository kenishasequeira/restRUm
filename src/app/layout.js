import './globals.css'

export const metadata = {
  title: 'RestRUm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >{children}</body>
    </html>
  )
}
