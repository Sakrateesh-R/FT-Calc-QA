import ReviewModel from "../models/ReviewModel.js";


export const addReview = (req,res) => {
    var {firstName,lastName,suggesstions,email} = req.body;
    var postData = {firstName,lastName,suggesstions,email}
    console.log(postData)
    const newData = new ReviewModel(postData)
                                    .save()
                                    .then(() => res.status(201).json({sucess:true, data: postData}))
                                    .catch( (err) => res.status(400).json(`error occur ${err}`))
};
export const getAllReview = (req,res) => {
    ReviewModel.find()
        .then( (userReview) => res.status(200).json({userReview}))
        .catch( (err) => res.status(400).json(`Error occurs while getting post ${err}`))
    
};