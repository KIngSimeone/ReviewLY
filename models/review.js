var mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId, ref: 'User'
    },
    general:{
        type:String,
        required: true,
        maxlength: 500
    },    
    landlord:{
        type:String,
        required: true,
        maxlength: 500
    },
    environment:{
        type:String,
        required: true,
        maxlength: 500
    },
    amenities:{
        type:String,
        required: true,
        maxlength: 500
    },
});