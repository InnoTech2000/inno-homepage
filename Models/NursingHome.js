import mongoose from "mongoose";

const NHSchema = new mongoose.Schema({
    place: {
        type:String
    },
    price: {
        type:String
    },
    serve1: {
        type:String
    },
    serve2: {
        type:String
    },
    serve3: {
        type:String
    },
    serve4: {
        type:String
    },
    hospitalname: {
        type:String
    }

},{timeseries:true})


const NursingHome = mongoose.models.NHs || mongoose.model('NH',NHSchema)

export default NursingHome