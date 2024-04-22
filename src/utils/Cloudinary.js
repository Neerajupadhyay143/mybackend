import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const fileUploadOnCloudinary = async (loaclFilePath) => {
    try {
        if (!loaclFilePath) return null;
        const response = await cloudinary.uploader.upload(loaclFilePath, {
            resource_type: "auto"
        })
        console.log(" file successfully uploaded on  cloudinary ", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(loaclFilePath)
        return null
    }
}


export { fileUploadOnCloudinary }