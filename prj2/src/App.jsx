import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import { Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, teal } from '@mui/material/colors'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Test from './components/Test'
import TabsTest from './components/TabsTest.jsx'

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
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/tabs" element={<TabsTest />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}

export default App
