import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/authRouter.js'

const app=express();
app.use(bodyParser.json({extended:true , limit:"15mb"}));
app.use(bodyParser.urlencoded({extended:true , limit:"15mb"}));
app.use(cors());
app.use('/register',authRouter)
const DATABASE_CONNECTION="mongodb+srv://admin:admin@cluster0.xj17z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT=process.env.PORT || 5000;
mongoose.connect(DATABASE_CONNECTION, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
.catch((err)=> console.log(err))
// mongoose.set('useFindAndModify',false)