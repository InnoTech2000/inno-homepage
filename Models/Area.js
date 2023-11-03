import mongoose from "mongoose";

const AreaSchame = new mongoose.Schema({
    area : {
        type: String
    }
})


const Areas = mongoose.models.Areas || mongoose.model('areas',AreaSchame)

export default Areas