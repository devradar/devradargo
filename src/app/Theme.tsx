'use client'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#16b291'
    },
    secondary: {
      main: '#e13253'
    }
  }
})

export default function Theme ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
