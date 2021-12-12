const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/e-kantin',{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false}).then(()=>{
    console.log("Connected to database succesfully..");
}).catch(err=>console.log("DB connection error"+err));