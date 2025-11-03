//all the cloudinary routes are here

// Ensure the required environment variables are set
if (
  !process.env.CLOUD_NAME ||
  !process.env.API_KEY ||
  !process.env.API_SECRET
) {
  throw new Error(
    "Cloudinary configuration missing. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your environment."
  );
}

//This is for cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Upload a local file to Cloudinary and return the public URL
const uploadMediaToCloudinary = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Error while uploading media to Cloudinary.");
  }
};
