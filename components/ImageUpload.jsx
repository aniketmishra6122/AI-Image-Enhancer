import React from "react";

const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if(file){
            props.uploadImageHandler(file);
        }
    };
  return (
    <div className="upload-container">
        <label htmlFor="fileInput" className="file-label">
        <span className="upload-text">
            Click and drag to upload your image
        </span>

            <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler}/>
        </label>

    </div>

  );
};
export default ImageUpload;