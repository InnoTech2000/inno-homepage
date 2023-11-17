import mongoose from "mongoose";

const NHSchema = new mongoose.Schema({
    place: {
        type:String
    },
    price: {
        type:String
    },
    address: {
        type:String
    },
    street: {
        type:String
    },
    serve: {
        type: String
    },
    serve1: {
        type: String
    },
    serve2: {
        type: String
    },
    serve3: {
        type: String
    },
    openhour: {
        type: Number
    },
    multiple: {
        type: Number
    },
    single : {
        type: Number
    },
    public : {
        type: Number
    },
    contactperson : {
        type: String
    },
    hospitalname: {
        type:String
    },
    hospitalphone : {
        type:String
    },
    some:{},some1:{},some2:{},some3:{},some4:{},some5:{},


},{timeseries:true})


const NursingHome = mongoose.models.NHs || mongoose.model('NH',NHSchema)

export default NursingHome