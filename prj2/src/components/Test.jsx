import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const commonStyles = {
  bgcolor: '#0a1929',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem',
}

const Test = () => {
  function btn1Clicked() {
    let txt = document.getElementById('standard-basic').value
    alert(`clicked btn 1, value of standard text box is: ${txt}`)
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      <Box component="span" sx={{ p: 2, m: 3, border: '1px solid grey' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={btn1Clicked}
          sx={{ m: 1 }}
        >
          Button 1
        </Button>
        <Button variant="contained" sx={{ m: 1 }}>
          Save
        </Button>
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
        <Box sx={{ ...commonStyles, borderRadius: 3 }} />
        <Box sx={{ ...commonStyles, borderRadius: '16px' }} />
      </Box>
    </div>
  )
}

export default Test
