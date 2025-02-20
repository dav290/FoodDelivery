import React from 'react'
import { Typography } from '@mui/material'
function LocationPage() {
     const address=
            [
                {
                    id:1,
                    city:'Quebec',
                    Location:'99 george street.Quebec NSW 2000',
                    Phone:'+1 444-444-444'
                },
                {
                    id:2,
                    city:'London',
                    Location:'99 george street.London NSW 2000',
                    Phone:'+44 2029-2029-2029'
                },
                {
                    id:3,
                    city:'Sydney',
                    Location:'99 george street.Sydney NSW 2000',
                    Phone:'+61 2888-2888-2888'
                },
            ]
        
  return (
    <div style={{
        width:'100%',
        minHeight:'80vh'
    }}>
    
      <Typography textAlign='center' mt={2} fontFamily='serif' variant='h3'>OUR LOCATION</Typography>
      <Typography textAlign='center' mt={2} fontFamily='serif' variant='h3'>Find The Nearest Restaurant</Typography>
      <Typography textAlign='center' mt={4} px={2} pb={2}  variant=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
         nesciunt excepturi. Aut animi quia eligendi nam aliquam quaerat sapiente ratione.
         Saepe consequuntur natus odio voluptatibus et laudantium tempore voluptatum aut exercitationem aliquam. Laboriosam dicta dolore exercitationem debitis fuga beatae impedit minus! Rem ipsa sed ex!</Typography>
    <div
    
    style={{
     justifyContent:'space-around',
     display:'flex',
     alignItems:'center',
     marginTop:'40px',
     gap:'25px'
    
    
    
    
    }}
    
    
    >
    
    
    
    
         {
        address.length > 0 ? (
            address.map((items)=>{
                return (
                    <div key={items.id}
                    style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        gap:'20px',
                        flexDirection:'column'
                    }}
                    
                    
                    >
           
           <Typography variant='h5' fontWeight='bold'>
             {items.city}
           </Typography>
           <Typography variant='' fontWeight='bold'>
             {items.Location}
           </Typography>
           <Typography variant='h6' fontWeight='bold'>
             {items.Phone}
           </Typography>
          
    
                    </div>
                )
            })
        ):(
            <div>
                No meals
            </div>
        )
       }
    
    </div>
    
    </div>
  )
}

export default LocationPage