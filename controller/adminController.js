const { createError } = require("../error");
const Admin = require("../model/Admin");
const Incident = require("../model/Incident");
const jwt = require("jsonwebtoken");

exports.adminSignUp=async(req,res,next)=>{
    try {
        console.log(req.body);
        const {name,email,password}=req.body
        const newAdmin=new Admin({
            name,
            email,
            password
        })
        await newAdmin.save()
        console.log(newAdmin._id);
        const token = jwt.sign({ id: newAdmin._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(200).json({message:'admin created successfully',token})
    } catch (error) {
        next(createError(500,'internal server error'))
    }
}

exports.createIncident=async(req,res,next)=>{
    try {
        console.log(req.body);
        const {incident}=req.body
        const newIncident=new Incident({
            incident
        })
        await newIncident.save()
        res.status(200).json('new incident saved successfully')
    } catch (error) {
        next(createError(500,'internal server error'))
    }
}

exports.getIncidents=async(req,res,next)=>{
    try {
        const incidents = await Incident.find({})
        res.status(200).json(incidents)
    } catch (error) {
        next(createError(500,'internal server error'))
    }
}