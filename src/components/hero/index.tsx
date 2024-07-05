'use client'
import { Button, Grid, Stack } from '@mui/material'

export const Hero = () => {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <h1>Using Material UI with NextJS</h1>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" className="text-rose-700">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  )
}
