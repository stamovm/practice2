import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

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
const commonStyles = {
  bgcolor: '#0a1929',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
}

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
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
        <Box component="span" sx={{ p: 2, m: 3, border: '1px solid grey' }}>
          <Button variant="contained">Save</Button>
          <Button variant="contained">load</Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            m: 3,
            backgroundColor: '#ccc',
          }}
        >
          <Box sx={{ ...commonStyles, borderRadius: '50%' }} />
          <Box sx={{ ...commonStyles, borderRadius: 1 }} />
          <Box sx={{ ...commonStyles, borderRadius: '16px' }} />
        </Box>
      </main>
    </ThemeProvider>
  )
}

export default App
