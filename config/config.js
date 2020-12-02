const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://simeone:<Jamesrodriguez10!>@cluster0.9xfmo.mongodb.net/<dbname>?retryWrites=true&w=majority"

const client = new MongoClient(uri);



const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: "mongodb+srv://simeone:Jamesrodriguez10!@cluster0.9xfmo.mongodb.net/<dbname>?retryWrites=true&w=majority"
        //DATABASE: 'mongodb://localhost:27017/Users'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}