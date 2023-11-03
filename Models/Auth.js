import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    username: {
        type:String
    },
    password: {
        type:String
    }

})



const Auths = mongoose.models.Auth || mongoose.model('Auth',AuthSchema)

export default Auths