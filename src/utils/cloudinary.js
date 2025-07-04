import { v2 as cloudinary } from "cloudinary";

// (async function() {

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file has been uploaded successfully
        console.log(
            "File has been uploaded on cloudinary successfully!",
            response.url
        );
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // remove locally saved temp file as the upload operation got failed
        return null;
    }
};

export { uploadCloudinary };
