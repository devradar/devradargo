import CssBaseline from '@mui/material/CssBaseline'
import NavBar from './NavBar'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import React from 'react'
import Theme from './Theme'

export const metadata = {
  title: 'devradar | manage your skills',
  description: 'Record your skills and track your progress'
}

export default function RootLayout (
  { children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <body style={{ width: '100vw'/* prevent layout from jumping due to scrollbar */ }}>
        <Theme>
        <CssBaseline />
        <div>
          <NavBar />
          <div style={{ margin: '2em' }}>
            {children}
          </div>
        </div >
        </Theme>
      </body>
    </html >
  )
}
