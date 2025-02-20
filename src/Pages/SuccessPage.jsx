import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function SuccessPage() {
    const navigate=useNavigate()
  return (
    <div
    style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh'
    }}
    
    >
    <Paper
     sx={{
        padding:'30px',
        borderRadius:'10px',
        textAlign:'center',
        maxWidth:'500px'
     }}
    
    
    >

    <Typography variant='h3' color='green'>

     Payment Successful!

    </Typography>
     <Typography>
        Thank you for your order!Your payment has been successfully processed
     </Typography>
      <Box px={2}>
        <Typography fontWeight='bold'>
            Order Summary
        </Typography>
        <Typography fontWeight='bold'>
            Order Number : {Math.floor(Math.random() * 1000000)}
        </Typography>
        <Typography fontWeight='bold'>
             Estimated Delivery: 30-45 mins
        </Typography>
      </Box>
      <Button
      
      sx={{
        backgroundColor:'#111',
        color:'#fff',
        mt:2
      }}
      onClick={()=>navigate('/')}
      >
     Back to Home
      </Button>
    </Paper>


    </div>
  )
}

export default SuccessPage