const express=require('express')
const { adminSignUp, createIncident, getIncidents } = require('../controller/adminController')
const { authMiddleware } = require('../middleware/authMiddleware')

const router=express.Router()

router.post('/signup',adminSignUp)

router.post('/create-incident',authMiddleware,createIncident)

router.get('/get-incidents',authMiddleware,getIncidents)

module.exports=router