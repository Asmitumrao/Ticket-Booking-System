import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // e.g., "your_cloud_name"
    api_key: process.env.CLOUDINARY_API_KEY,       // e.g., "1234567890"
    api_secret: process.env.CLOUDINARY_API_SECRET  // e.g., "your_api_secret"
  });

  const uploadToCloudinary = async (filePath, options = {}) => {
    try {
      const result = await cloudinary.uploader.upload(filePath, options);
      return result;
    } catch (error) {
      throw new Error(`Cloudinary upload failed: ${error.message}`);
    }
  };

  const uploadImagesToCloud = async (files) => {
      return await Promise.all(files.map(async (file, index) => {
          const filePath = file.path;
          try {
              const cloudinaryResponse = await uploadToCloudinary(filePath, {
                  folder: 'events',
                  public_id: `event_${Date.now()}_${index}`,
                  resource_type: 'image'
              });
              await fs.unlink(filePath); // Remove local file
              return cloudinaryResponse.url;
          } catch (error) {
              console.error("Upload error:", error);
              throw new Error("File upload failed");
          }
      }));
  };

  // const deleteImageFromCloud = async (publicUrl) => {
  //   const publicId = publicUrl.split('/').pop().split('.')[0]; // Extract public ID from URL
  //   try {
  //     await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
  //     console.log(`Image with public ID ${publicId} deleted successfully`);
  //   } catch (error) {
  //     console.error(`Error deleting image: ${error.message}`);
  //   }
  // }
  const deleteImageFromCloud = async (publicUrl) => {
    try {
      const url = new URL(publicUrl);
      const parts = url.pathname.split('/');
      const versionIndex = parts.findIndex(part => part.startsWith('v') && !isNaN(part.slice(1)));
      const publicIdWithExt = parts.slice(versionIndex + 1).join('/');
      const publicId = publicIdWithExt.replace(/\.[^/.]+$/, ''); // Remove extension
  
      await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
      console.log(`Image with public ID ${publicId} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting image: ${error.message}`);
    }
  };
  

  const deleteImagesFromCloud = async (urls) => {
    try {
      await Promise.all(urls.map(url => deleteImageFromCloud(url)));
    } catch (error) {
      console.error(`Error deleting images: ${error.message}`);
    }
  }
    

  export { uploadToCloudinary , uploadImagesToCloud,deleteImageFromCloud, deleteImagesFromCloud };