import mongoose from "mongoose";

const dormitorySchema = new mongoose.Schema({

    dormitory : {
        type : String
    }


})

const Dormitory = mongoose.models.Dormitorys || mongoose.model('Dormitory' , dormitorySchema)

export default Dormitory