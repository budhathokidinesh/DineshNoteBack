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
