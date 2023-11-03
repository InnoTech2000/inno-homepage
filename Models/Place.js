import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({

    area : {
        type: String
    },
    place : {
        type: String
    }

})


const Places = mongoose.models.Place || mongoose.model('Place',PlaceSchema)

export default Places