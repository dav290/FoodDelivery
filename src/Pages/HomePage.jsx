import React, { useEffect, useState } from 'react'
import backImage from '../assets/Image.jpg'
import { Button, Grid, Typography,Box, Rating, Paper, Container } from '@mui/material'
import axios from 'axios'
import { Apple, Google, PhoneAndroid, StarBorder,LocationCity, Phone, Email,  } from '@mui/icons-material'
import Footer from '../Components/Footer'
import Delivery from '../Components/Delivery'
import ReviewsPage from '../Components/Reviews'
import LocationPage from '../Components/LocationPage'
function HomePage() {
    const [meals,setMeals]=useState([])
    useEffect(()=>{
    axios.get('https://dummyjson.com/recipes').then((response)=>{
        console.log(response.data)
        setMeals(response.data.recipes,[])
    })
    .catch((error)=>console.error("Error fetching data:",error))
    },[])
   
   const handleClick=async(item)=>{
        try {
            const items=[item]
            const response= await axios.post('http://localhost:3000/Payment',{items})
            window.location.href=response.data.url
        } catch (error) {
            console.error('Error',error)
        }
   }
    
  return (
    <>
    <div
    style={{
        position:'relative',
        minHeight:'100vh',
        width:'100%',
        backgroundImage:`url(${backImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        clipPath:'ellipse(100% 85% at center top)',
        overflow:'visible'
    }}
    
     
    >
        <div 
        style={{

         position:'absolute',
         top:0,
         left:0,
         width:'100%',
         height:'100%',
         backgroundColor:'rgba(0,0,0,0.5)',
         zIndex:1,

        }}
        
        
        
        ></div>

        <div
        style={{
            position:'relative',
            zIndex:2
        }}
        
        >
     <Typography
     variant='h3'
     textAlign='center'
     paddingTop='50px'
     fontFamily='monospace'
     color='white'
     >

        Long Hill Restaurant
     </Typography>

     <Typography
     textAlign='center'
     variant='h1'
     color='white'
     fontWeight='bold'
     mt={8}
     >
   
   OUR MENU


     </Typography>

        </div>
      
    </div>
    <div
    style={{
   position:'absolute',
   bottom:'-150px',
   left:'50%',
   transform:'translateX(-50%)',
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   gap:'70px',
   zIndex:3,
   marginBottom:'100px'
    }}
    
    
    
    >
   {
    meals.length > 0 ? (
        meals.slice(0,3).map((items)=>{
            return (
                <div key={items.id}
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'20px',
                    padding:'15px',
                    borderRadius:'15px',
                    boxShadow:'0px 10px 20px rgba(0,0,0,0.2)',
                    flexDirection:'column'
                }}
                
                
                >
        <img src={items.image}
        
        style={{
            width:'250px',
            height:'250px',
            borderRadius:'50%',
            objectFit:'cover',
            border:'5px solid white'
        }}
        
        />

       <Typography variant='h6' fontWeight='bold'>
         {items.name}
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
    <div  
style={{
  width:'100%',
  minHeight:'30vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  gap:'10px',
  marginTop:'20px'







}}



>

<Typography variant='h3' fontWeight='bold'>Midday Meals & Choices</Typography>

</div>
<div
  style={{
    display:'grid',
    gridTemplateColumns:'repeat(2,1fr)',
    gap:'50px',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20px',
    zIndex:'3'
  }}
  
  
  >
   
   {
    meals.length > 0 ? (
        meals.slice(4,10).map((items)=>{
            return (
                <div key={items.id}
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'20px',
                    padding:'15px',
                    borderRadius:'15px',
                    boxShadow:'0px 10px 20px rgba(0,0,0,0.2)',
                    flexDirection:'column'
                }}
                
                
                >
        <img src={items.image}
        
        style={{
            width:'250px',
            height:'250px',
            borderRadius:'50%',
            objectFit:'cover',
            border:'5px solid white'
        }}
        
        />

       <Typography variant='h6' fontWeight='bold'>
         {items.name}
       </Typography>
       <Typography variant='h6' fontWeight='bold'>
         {items.reviewCount}$
       </Typography>
       <Button
       sx={{
        backgroundColor:'#111',
        color:'#fff',
        fontSize:'20px',
        px:2
       }}
       
    onClick={()=>handleClick(items)}
       >
      ORDER NOW
       </Button>

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
<div  
style={{
  width:'100%',
  minHeight:'30vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  gap:'10px',
  marginTop:'20px'







}}



>

<Typography variant='h3' fontWeight='bold'>Savor Lunch & More</Typography>

</div>
<div
  style={{
    display:'grid',
    gridTemplateColumns:'repeat(2,1fr)',
    gap:'50px',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20px',
    zIndex:'3'
  }}
  
  
  >
   
   {
    meals.length > 0 ? (
        meals.slice(11,17).map((items)=>{
            return (
                <div key={items.id}
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'20px',
                    padding:'15px',
                    borderRadius:'15px',
                    boxShadow:'0px 10px 20px rgba(0,0,0,0.2)',
                    flexDirection:'column'
                }}
                
                
                >
        <img src={items.image}
        
        style={{
            width:'250px',
            height:'250px',
            borderRadius:'50%',
            objectFit:'cover',
            border:'5px solid white'
        }}
        
        />

       <Typography variant='h6' fontWeight='bold'>
         {items.name}
       </Typography>
       <Typography variant='h6' fontWeight='bold'>
         {items.reviewCount}$
       </Typography>
       <Button
       sx={{
        backgroundColor:'#111',
        color:'#fff',
        fontSize:'20px',
        px:2
       }}
       onClick={()=>handleClick(items)}
      
       >
      ORDER NOW
       </Button>

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
<div  
style={{
  width:'100%',
  minHeight:'30vh',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  gap:'10px',
  marginTop:'20px'







}}



>

<Typography variant='h3' fontWeight='bold'>Sweet Treats  & More</Typography>

</div>
<div
  style={{
    display:'grid',
    gridTemplateColumns:'repeat(2,1fr)',
    gap:'50px',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20px',
    zIndex:'3'
  }}
  
  
  >
   
   {
    meals.length > 0 ? (
        meals.slice(18,24).map((items)=>{
            return (
                <div key={items.id}
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'20px',
                    padding:'15px',
                    borderRadius:'15px',
                    boxShadow:'0px 10px 20px rgba(0,0,0,0.2)',
                    flexDirection:'column'
                }}
                
                
                >
        <img src={items.image}
        
        style={{
            width:'250px',
            height:'250px',
            borderRadius:'50%',
            objectFit:'cover',
            border:'5px solid white'
        }}
        
        />

       <Typography variant='h6' fontWeight='bold'>
         {items.name}
       </Typography>
       <Typography variant='h6' fontWeight='bold'>
         {items.reviewCount}$
       </Typography>
       <Button
       sx={{
        backgroundColor:'#111',
        color:'#fff',
        fontSize:'20px',
        px:2
       }}
       
       onClick={()=>handleClick(items)}
       >
      ORDER NOW
       </Button>

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
<LocationPage/>
<ReviewsPage/>
 <Delivery/>
  <Footer/>
    </>
  )
}

export default HomePage