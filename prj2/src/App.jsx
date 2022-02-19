import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, teal } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    secondary: {
      main: green[600],
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <h1>Hello world!</h1>
      </main>
    </ThemeProvider>
  )
}

export default App
