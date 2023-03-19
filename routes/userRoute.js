const express=require('express')
const { signUp, viewAllIncidents, raiseTickets } = require('../controller/userController')
const { authMiddleware } = require('../middleware/authMiddleware')

const router=express.Router()

router.post('/signup',signUp)

router.get('/incidents',authMiddleware,viewAllIncidents)

router.post('/tickets',authMiddleware,raiseTickets)

module.exports=router