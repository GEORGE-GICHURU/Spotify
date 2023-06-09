import './globals.css'  
import {  Montserrat } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'

const font = Montserrat ({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to Music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
             <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
