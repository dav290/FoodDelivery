const express = require('express')


const Stripe=require('stripe')
const cors = require('cors')
const app=express()
app.use(cors())
app.use(express.json())
require('dotenv').config()

const stripe=Stripe(process.env.Secret_key)



app.post('/Payment',async(req,res)=>{
    try {
        const {items}=req.body
        const line_items=items.map((item)=>({
            price_data:{
                currency:'usd',
                product_data:{
                    name:item.name,
                    images:[item.image]
                },
                unit_amount:item.reviewCount * 100
            },
            quantity:1,
        }))
        const session =await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            shipping_address_collection:{
                allowed_countries:['CA','AU','GB']
            },
            billing_address_collection:'required',
            line_items,
            mode:'payment',
            success_url:"http://localhost:5173/success",
            cancel_url:'http://localhost:5173/'

        })
        res.json({url:session.url})
    } catch (error) {
        console.log('stripe error',error)
        res.status(500).json({error:error.message})
    }

})
const Port=process.env.Port

app.listen(Port,()=>console.log(`App listening on ${Port}`))