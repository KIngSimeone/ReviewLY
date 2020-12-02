var mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({
    reviews:{
        type:String,
        required: true,
        maxlength: 500
    },
    user:{
        [
            {type: Schema.Types.ObjectId, ref: 'User'}
          ]
    },
})