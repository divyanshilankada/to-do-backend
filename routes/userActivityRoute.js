const express = require("express");
const router = express.Router();

const UserActivity = require('../models/userActivityModel');

router.get('/', async (req, res) => {

    try{

        const userActivities = await UserActivity.find();
        res.status(200).json({
            status:"Success",
            message:userActivities
        })
        

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});


router.post('/', async (req, res) => {

    try{

       console.log(req.body);
        const activity = await UserActivity.create({
            activity:req.body.activity,
            status:req.body.status,
            user:req.user,
        });

        res.status(200).json({
            status:"Success",
            message:activity
        });
                

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});


module.exports = router;
