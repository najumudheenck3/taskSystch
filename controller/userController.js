const { createError } = require("../error");
const Incident = require("../model/Incident");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body
        const newUser = new User({
            name,
            email,
            password
        })
        await newUser.save()
        console.log(newUser._id);
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(200).json({message:'user created successfully',token})
    } catch (error) {
        next(createError(500, 'internal server error'))
    }
}

exports.viewAllIncidents = async (req, res, next) => {
    try {
        const incidents = await Incident.find({})
        res.status(200).json(incidents)
    } catch (error) {
        next(createError(500, 'internal server error'))
    }
}

exports.raiseTickets = async (req, res, next) => {
    try {
        console.log(req.body);
        const incidentId = req.body.id
        await Incident.findByIdAndUpdate({ _id: incidentId }, {
            $inc: { tickets: 1 }
        })
        res.status(200).json('ticket raised successfully')

    } catch (error) {
        next(createError(500, 'internal server error'))
    }
}