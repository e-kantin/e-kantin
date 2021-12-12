const express=require('express');
const router=express.Router();
const User=require('../DbModels/userSchema')

router.post('/login', (req,res,next)=>{

await User.findOne({email:req.body.email},(err,user)=>{


    if(err){
        return res.json({error:err})
    }
    if(!user){
        return res.send("User doesnt exists...")
    }
})

})
router.post('/register',async(req,res,next)=>{
    const user=new User({
     name:req.body.name,
     surname:req.body.surName,
     email:req.body.email,
     TCK:req.body.TCK,
     password:bcrypt.hashSync(req.body.password,10) 
    });

     user.save(err=>{

        if(err){
            return res.status(400).json({
                error:'This email is used.'
            })
        }
        res.send({user:user._id})
     })
    
    
 
})










module.exports=router1;