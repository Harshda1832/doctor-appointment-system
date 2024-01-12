const doctorModel = require ('../models/doctorModel')
const getDoctorInfoController = async (req, res) => {
    try {
        const doctor = await doctorModel.findOne({userId: req.body.userId})
        res.status(200).send({
            success:true,
            message: 'doctor data fetch success',
            data : doctor,
        });
    } catch (error) {
        console.log(error)
        req.status(500).send({
            success:false,
            error, 
            message: ' error in fetching doctor details '
        })
        
    }
}

//update doc profile
const updateProfileController = async (req,res) => {
    try {
        const doctor = await doctorModel.findOneAndUpdate({userId:req.body.userId}, req.body)
        res.status(201).send({
            success:true,
            message:"doctor profile updated ",
            data:doctor,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"doctor profile update issue",
            error
        })
        
    }
};


module.exports = {getDoctorInfoController, updateProfileController};