import mongoose from "mongoose";

const BasicDetailsSchema = mongoose.Schema({
    CalculatedData:{
        type:String,
        trim:true,
        maxlength:[200,"You have exceed the number of words in the list "],
        requried : true
    }  ,
    userDevice:{
        type:String,
        trim:true
    }
    
});

const UserBasicDetails = mongoose.model('UserBasicDetails',BasicDetailsSchema);
export default UserBasicDetails;