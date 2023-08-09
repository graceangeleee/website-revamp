import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'UPLB COSS',
  description: 'UPLB COSS Official Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
