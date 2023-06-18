import mongoose from "mongoose";

const ReviewModelSchema = mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        maxlength:[200,"You have exceed the number of words in the list "],
        requried : true
    }  ,
   lastName:{
        type:String,
        trim:true,
        maxlength:[200,"You have exceed the number of words in the list "],
        requried : true
    }  ,
    suggesstions:{
        type:String,
        trim:true,
        maxlength:[1000,"You have exceed the number of words in the list "],
    },
    email:{
        type:String,
        trim:true,
        maxlength:[200,"You have exceed the number of words in the list "],
    }
    
});

const ReviewModel = mongoose.model('ReviewModel',ReviewModelSchema);
export default ReviewModel;