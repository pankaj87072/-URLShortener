const express=require('express');
const router=express.Router();
const { handleshortnerreq,handleredirecttoshorturl,handleanalyticid,handlerendringejs} = require('../controller/handlerequest');
//Defining Routes
router.post('/',handleshortnerreq);
router.get('/:shortid',handleredirecttoshorturl);
router.get('/analytic/:shortid',handleanalyticid);
router.get('/pages/test',handlerendringejs);
module.exports=router;