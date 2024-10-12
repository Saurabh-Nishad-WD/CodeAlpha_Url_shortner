import mongoose from "mongoose";
const urlSchema = mongoose.Schema({
    shortedURL:{
        type: String,
        required: true
    },
    redirectURL:{
        type: String,
        required: [true,'redirect url is required'],
    },
},{timestamps:true});

export default mongoose.model('url', urlSchema);