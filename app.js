const cors=require('cors')
const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const authRouter=require('./routes/authRoutes')
const todoRouter=require('./routes/todoRoutes')
const errorMiddleware=require('./middleware/error')
const app=express()


const PORT=process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api',authRouter)
app.use('/api/todos',todoRouter)

app.get('/',(req,res)=>{
    res.send('Hello to todo api')
})

app.use(errorMiddleware)

const initialiseDbAndRunServer=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.log(error.message)   
    }
}

initialiseDbAndRunServer()

