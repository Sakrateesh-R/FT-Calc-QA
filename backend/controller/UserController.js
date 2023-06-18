
import UserBasicDetails from "../models/BasicDetail.js";
import os from "os";

export const addData = (req,res) => {
    var {CalculatedData} = req.body;
    if(os.hostname()){
        var userDevice = os.hostname()
    }
    console.log(userDevice)
    var postData = {CalculatedData,userDevice}
    
    const newData = new UserBasicDetails({CalculatedData,userDevice})
                                    .save()
                                    .then(() => res.status(201).json({sucess:true, data: postData}))
                                    .catch( (err) => res.status(400).json(`error occur ${err}`))
};
export const allTask = (req,res) => {
    UserBasicDetails.find()
        .then( (userData) => res.status(200).json({userData}))
        .catch( (err) => res.status(400).json(`Error occurs while getting post ${err}`))
    
};
export const updateData = (req,res) => {
    
    const {id} = req.params
    UserBasicDetails.findByIdAndUpdate(id)
        .then( (data) =>{
            
            data.CalculatedData = req.body.CalculatedData;
            data.save()
            console.log(data)
            // .then( (CalculatedData) => res.status(201).json("data updated successfully"))
            .catch( (err) => res.status(400).json(`Error occurs while updating post ${err}`));
        } )
        .catch( (err) => res.status(400).json(`Error occurs while getting post ${err}`))
    //res.send("Getting all Post");
};
export const delData = (req,res) => {
    const {id} = req.params
    UserBasicDetails.findByIdAndDelete(id).then( () => res.status(200).json({sucess:true, msg:"Data Removed Successfully"}))
        .catch( (err) => res.status(400).json(`Error occurs while getting post ${err}`))
    //res.send("Getting all Post");
};

export const mongoUpdate = async (req,res) => {
    const {id} = req.params
    //const updatedData = req.body.CalculatedData
    UserBasicDetails.findById(id)
        .then( (userDetail) => {
            userDetail.CalculatedData = req.body.CalculatedData
            console.log(req.body)
            userDetail.save()
                      .then( (details) => res.status(201).json({msg:"Data updated successfully"}))
                      .catch((err) => res.status(400).json(`Error occured while updating ${err}`))
        })
}
