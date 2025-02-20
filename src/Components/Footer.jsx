import React from 'react'
import { Paper,Container,Grid,Typography,Box } from '@mui/material'
import { LocationCity,Phone,Email } from '@mui/icons-material'

function Footer() {
  return (
    <Paper sx={{
        backgroundColor:'whitesmoke',
        color:'#fff',
        py:4,
    
     }}>
      <Container maxWidth='lg'>
       <Grid container spacing={4} justifyContent='center'>
        <Grid item  xs={12} md={4}>
          <Typography variant='h5' gutterBottom fontWeight='bold' color='#111'>
            Long Hill Restaurant
          </Typography>
          <Typography variant='body2' color='#111'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Velit maiores, voluptates atque provident eius sequi eaque,
             aliquam aspernatur tenetur ipsam alias ut architecto eum explicabo.
          </Typography>
        </Grid>
        <Grid item  xs={12} md={4}>
          <Typography variant='h5' gutterBottom fontWeight='bold' color='#111'>
            Quick Links
          </Typography>
          <Typography variant='body2' color='#111'>
          🏠 Home
          </Typography>
          <Typography variant='body2' color='#111'>
          📖 Menu
          </Typography>
          <Typography variant='body2' color='#111'>
          📍 Locations
          </Typography>
          <Typography variant='body2' color='#111'>
          ☎️ Contact Us
          </Typography>
        </Grid>
        <Grid item  xs={12} md={4}>
          <Typography variant='h5' gutterBottom fontWeight='bold' color='#111'>
            Contact Us
          </Typography>
          <Box display='flex' alignItems='center' gap={1} mb={2}>
           <LocationCity sx={{color:'green'}}/>
          <Typography variant='body2' color='#111'>
           123 Hill Road,Sydney
          </Typography>
          </Box>
          <Box display='flex' alignItems='center' gap={1} mb={2}>
           <Phone sx={{color:'red'}}/>
          <Typography variant='body2' color='#111'>
           +61 555-555-555
          </Typography>
          </Box>
          <Box display='flex' alignItems='center' gap={1} mb={2}>
           <Email sx={{color:'silver'}}/>
          <Typography variant='body2' color='#111'>
           LongHill@mail.com
          </Typography>
          </Box>
          
        
        </Grid>
    
       </Grid>
      </Container>
     </Paper>
  )
}

export default Footer