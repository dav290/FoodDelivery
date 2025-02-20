import React from 'react'
import { Box,Typography,Button } from '@mui/material'
import { Google,Apple,PhoneAndroid } from '@mui/icons-material'
function Delivery() {
  return (
    <div
    style={{
      width:'100%',
      minHeight:'80vh'
    }}
   
   
   
   
   >
   <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around'
   }}>
  
   
     <div style={{marginTop:'20px'}}>
      <Typography variant='h3'>
      Free Delivery!
      </Typography>
      <Typography variant='h2'>
       Download The App now!
      </Typography>
      <Typography my={2}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Suscipit illum soluta repellendus mollitia totam officia,<br/>
        quisquam odit, facere autem iusto molestias, qui animi accusamus nihil.
      </Typography>
      <div style={{ display:'flex',gap:'10px'}}>
     <Button
     variant='contained'
      sx={{
          backgroundColor:'#ff6600',
          color:'#fff',
          padding:'10px 20px',
          borderRadius:'30px',
          fontSize:'1rem',
          alignItems:'center',
          gap:1,
      "&:hover":{
          backgroundColor:"#cc5500"
      }
      }}
     >
    <Google color='white'/> Google Play
     </Button>
     <Button
     variant='contained'
      sx={{
          backgroundColor:'#111',
          color:'#fff',
          padding:'10px 20px',
          borderRadius:'30px',
          fontSize:'1rem',
          alignItems:'center',
          gap:1,
      "&:hover":{
          backgroundColor:"#cc5500"
      }
      }}
     >
    <Apple color='white'/> Apple Store
     </Button>
     </div>
     </div>
     
     <div 
     style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginTop:'25px',
      gap:'30px'
     }}
     
     >
      <Box
      sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          gap:2,
          minHeight:'50vh',
          mt:4
      }}
      
      
      >
     <PhoneAndroid
     sx={{
      fontSize:'250px',
      backgroundColor:'#111',
      borderRadius:'50%',
      padding:'30px',
      color:'white',
      boxShadow:'0px 4px 10px rgba(255,255,255,0.2)'
     }}
     
     
     />
  
      </Box>
      </div>
     </div>
   </div>
  )
}

export default Delivery