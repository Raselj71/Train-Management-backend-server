import express from 'express'
import 'dotenv/config'
import Allroute from './route.js';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';



const app=express();
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))
app.use('/api/v1',Allroute)





app.use('*',(req,res)=>{
    res.status(404).send('route not found')
})

app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message || 'An unexpected error occurred' });
});


export default app;