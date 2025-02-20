import React from 'react'
import { Grid,Box,Typography,Rating } from '@mui/material'
import { Google,Apple,StarBorder } from '@mui/icons-material'
function ReviewsPage() {
  return (
    <div
 style={{
    width:'100%',
    minHeight:'40vh',
    backgroundColor:'#111',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around'
 }}


>
  <Grid container spacing={4} justifyContent='space-around' py={2}>
   <Grid item>
    <Box
    sx={{
        backgroundColor:'#1a1a1a',
        padding:2,
        width:250,
        height:250,
        borderRadius:2,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    }}
    
    
    
    >

    <Google style={{ fontSize:50, color:'#fff'}}/>
    <Rating value={4} max={5} readOnly/>
    <Typography color='white'>"Awesome experience!"</Typography>

    </Box>




   </Grid>

   <Grid item>
    <Box
    sx={{
        backgroundColor:'#1a1a1a',
        padding:2,
        width:250,
        height:250,
        borderRadius:2,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    }}
    
    
    
    >

    <Apple style={{ fontSize:50, color:'#fff'}}/>
    <Rating value={4} max={5} readOnly/>
    <Typography color='white'>"Best Service Ever!"</Typography>

    </Box>




   </Grid>

   <Grid item>
    <Box
    sx={{
        backgroundColor:'#1a1a1a',
        padding:2,
        width:250,
        height:250,
        borderRadius:2,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    }}
    
    
    
    >

    <StarBorder style={{ fontSize:50, color:'#fff'}}/>
    <Rating value={4} max={5} readOnly/>
    <Typography color='white'>"Great App!"</Typography>

    </Box>




   </Grid>



  </Grid>


</div>
  )
}

export default ReviewsPage