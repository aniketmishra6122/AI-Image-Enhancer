import axios from "axios";
const API_KEY = "wxkcx6x93tjtuodru";
const BASE_URL = "https://techhk.aoscdn.com"

export const enhancedImageAPI = async (file) => {
    // return "hello"
    try {
        const taskId = await uploadImage(file);
        console.log("Image uploaded successfully, taskId:", taskId);
        
        const enhancedImageData = await pollForEnhancedImage(taskId);
        console.log("Enhanced image data:", enhancedImageData);
        return enhancedImageData;
    } catch (error) {
        console.log("error inhancing image", error);
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });
    if(!data?.data?.task_id){
        throw new Error("Error uploading image");
    }
    return data.data.task_id;
    //code to upload image
    // "/api/tasks/visual/scale"
    // console.log(data);
    // return taskId;
};

const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY": API_KEY,
        },
    });
    if(!data?.data){
        throw new Error("Error fetching enhanced image");
    }
    return data.data;
    // fetched enhanced image
    // "/api/tasks/visual/scale/{task_id}"
};


const pollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log("Processing...");

        if (retries >= 20) {
            throw new Error("Max retries reached. Please try again later.");
        }

        // Wait for 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Try again
        return pollForEnhancedImage(taskId, retries + 1);
    }

    // Return result when processing is complete
    return result;
};
