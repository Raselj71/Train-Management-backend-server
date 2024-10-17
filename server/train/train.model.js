import mongoose from "mongoose";

const stopageSchema = new mongoose.Schema({
    station_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'stationModel',
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    }
});

const trainSchema = new mongoose.Schema({
    trainNumber: {
        type: String,
        required: [true,'Train number is required'],
        unique: true
    },
    trainName: {
        type: String,
        required: [true, 'Train name is requird']
    },
    stopages: [stopageSchema], 
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const trainModel = mongoose.model('trainModel', trainSchema);