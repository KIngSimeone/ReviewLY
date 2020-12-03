var mongoose=require('mongoose');
var Schema = mongoose.Schema;
//var User = mongoose.model('User')
const User=require('./user');

const reviewSchema=new Schema({
    user:{
        type: Schema.Types.ObjectId, ref: User
    },
    apartment:{
        type:String,
        required:true,
        maxlength:200
    },
    general:{
        type:String,
        required: true,
        maxlength: 500
    },    
    landlord:{
        type:String,
        maxlength: 500
    },
    environment:{
        type:String,
        maxlength: 500
    },
    amenities:{
        type:String,
        maxlength: 500
    },
    images:{
        data: Buffer, 
        contentType: String,
    },
    marks: {
        type:Number,
    }
});

module.exports=mongoose.model('Review',reviewSchema);