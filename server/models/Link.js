import { Schema,model } from "mongoose";

const linkSchema =new Schema({
    url : {
        type :String,
        required: true,
    },
    slug:{
        type :String,
        required: true,
        unique:true,
    },
clicks:{
    type:Number,
    required:true,
    default:0,
},
}, {
    timestamps:true,
});

const Link = model('Link',linkSchema);

export default Link;