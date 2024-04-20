import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: string,
        required: true
    },
    title: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true
    },
    duration: {
        type: number,
        required: true
    },
    views: {
        type: number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User",
    }

}, {
    timestamps: true
})

export const Video = mongoose.model("Video", videoSchema)