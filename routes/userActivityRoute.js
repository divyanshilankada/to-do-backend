const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/middleware");

const UserActivity = require('../models/userActivityModel');

router.get('/', validateToken,async (req, res) => {

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


router.post('/', validateToken,async (req, res) => {

    try{

        //let token = req.headers['authorization'];

        //jwt.veri
        console.log(req.user);

        const activity = await UserActivity.create({
            activity:req.body.activity,
            status:req.body.status,
            user:req.user
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
