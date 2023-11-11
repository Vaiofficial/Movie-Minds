import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Dekho',
  description: 'This is Movie Dekho Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <Header/>


        {/* navbar */}



        {/* searchBox */}
        
        
        {children}</body>
    </html>
  )
}
