import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
// import { enhancedImageAPI } from "../api/enhanceImage";
import { enhancedImageAPI } from "../utils/enhancedImageApi"; // Adjust the import path as necessary

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

    const uploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setLoading(true);
        // Simulate an API call to enhance the image
        try {
          const enhancedURL = await enhancedImageAPI(file);
          setEnhancedImage(enhancedURL);
          setLoading(false);
        } catch (error) {
          console.log(error);
          alert("Error enhancing image. Please try again.");
        }
    };
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
