import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    dormitory : {
        type : String
    },
    service : {
        type: String
    }, 
    servicePrice : {
        type: Number
    }


})

const Services = mongoose.models.Service || mongoose.model('Service',ServiceSchema)

export default Services