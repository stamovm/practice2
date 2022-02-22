import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

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
      <CssBaseline />
      <main>
        <Typography variant="h3" mt={5} ml={5}>
          {' '}
          Hello world!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            alert('clicked')
          }}
        >
          Hello World
        </Button>
      </main>
    </ThemeProvider>
  )
}

export default App
