import { Button } from '@mui/material'

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Secondary
      </Button>
      <Button variant="contained" color="error" sx={{ ml: 2 }}>
        error
      </Button>
      <Button variant="contained" color="warning" sx={{ ml: 2 }}>
        warning
      </Button>
      <Button variant="contained" color="info" sx={{ ml: 2 }}>
        info
      </Button>
      <Button variant="contained" color="success" sx={{ ml: 2 }}>
        success
      </Button>
    </div>
  )
}

export default Home
