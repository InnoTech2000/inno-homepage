import mongoose from "mongoose";


const ClientSchema = new mongoose.Schema({
    name: {
        type : String
    },
    phone: {
        type : String
    }, 
    hospital: { type : String },


})

const Client = mongoose.models.Clients || mongoose.model('clients', ClientSchema)

export default Client