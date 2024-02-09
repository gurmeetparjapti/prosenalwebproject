const express = require("express");
const users = require("../schema/schemaone");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticat = require('../auth/authentication');
const cookie= require('cookie-parser');
const contactapi = require("../schema/schematwo");
const hiringapidata=require("../schema/schemathree")

/*get all data api */
router.get("/getdata",async(req,res)=>{
    const allusers = await users.find();
    res.json(allusers);
    console.log(allusers);
});


// post api
router.post("/create",async(req,res)=>{
    const {Username,user_email,phone_no,user_pass,user_repass} = req.body;
    const adduser = new users({
        Username,user_email,phone_no,user_pass,user_repass,
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
});
//contact data
router.post("/contatdata",async(req,res)=>{
    const {firstname,lastname,email,phone,cooment} = req.body;
    const adduser = new contactapi({
        firstname,lastname,email,phone,cooment
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
});
router.get("/contactapidata",async(req,res)=>{
    const allusers = await contactapi.find();
    res.json(allusers);
    console.log(allusers);
});
//contact api 
router.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleuser = await users.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});

// delete api
router.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await users.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});

// update api
router.post("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await users.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});
//update single data api
router.get("/singledatas/:id",async(req,res)=>{
    const {id} = req.params;
    const allusers = await users.find({_id:id});
    res.json(allusers);
    console.log(allusers);
}); 


//login authentication 
router.post("/login", async(req,res)=>{
    const {user_email, user_pass} = req.body;
    if(!user_email || !user_pass ){
        return res.status(422).json({error:"user and pass no dont match"});
        
    }
    else{
        // const a = await users.findOne({email:email});
        // console.log(a);
        // if(a.email===email && a.pass===pass)
        // {
        //     return res.status(206).json({message:'welcome',status:480});
        // }
        // else
        // {
        //     return res.status(244).json({error:'plese valid email user and password'});
        // }
       
        const uservalidation = await users.findOne({user_email:user_email});
        console.log(uservalidation);
        if(uservalidation){
            const mathdata = await bcrypt.compare(user_pass,uservalidation.user_pass);
            if(!mathdata){
                res.status(422).json({error:"password not match"});
            }else{
                //token generate after successful find data
                    const token = await uservalidation.customgeenratefunction();
                // cookies generate
                    res.cookie("usecookie",token,{
                        expires:new Date(Date.now()+9000000),
                        httpOnly:true
                    });
                    const result = {
                        uservalidation,
                        token
                    }
                    return res.status(201).json({status:201,result});
            }
        }
    }
});



// user validation
router.get("/validuser",authenticat,async(req,res)=>{
    // console.log("show this message after done authenticat varification");
    try{
        const firsttimevalid = await users.findOne({_id:req.userId});
        res.status(201).json({status:201,firsttimevalid});
    }
    catch(error)
    {
        res.status(401).json({status:401,error})
    }


});


//applyformapi
router.post("/hiring",async(req,res)=>{
    const {first_name,last_name,email,phone,course} = req.body;
    const adduser = new hiringapidata({
        first_name,last_name,email,phone,course
    });
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
});

router.get("/hiringapi",async(req,res)=>{
    const allusers = await hiringapidata.find();
    res.json(allusers);
    console.log(allusers);
});















module.exports = router;



