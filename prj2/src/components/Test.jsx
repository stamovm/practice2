import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
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
  return (
    <div>
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
    </div>
  )
}

export default Test
