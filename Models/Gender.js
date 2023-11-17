import mongoose from "mongoose";

const GenderSchema = new mongoose.Schema({
    gender : {
        type: String
    }
})

const Genders = mongoose.models.Genders || mongoose.model('Gender',GenderSchema)

export default Genders