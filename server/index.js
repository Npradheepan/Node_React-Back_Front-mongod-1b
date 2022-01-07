import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//Local routes file  import
import postRoutes from './routes/posts.js'

//express Variable
const app = express();



//Middelware
app.use(bodyParser.json({limit: '30mb', extended:true }));
app.use(bodyParser.urlencoded({limit: '30mb', extended:true }));
app.use(cors());

//Local Routting 
app.use('/posts', postRoutes);

//Local Port 
const PORT = process.env.PORT || 5000;
//Mongo DB Connection
const URL ='mongodb+srv://sample-project:sample-project123@cluster0.75zh6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;';
mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,() => console.log(`This Port Runnig at: ${PORT}`)))
.catch((error)=>console.log(error.message));