import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    multiple : {
        type: Number
    },
    single : {
        type: Number
    },
    public : {
        type: Number
    }

})

const Room = mongoose.models.Rooms || mongoose.model('Room',RoomSchema)

export default Room