import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="image-grid">
      {/* Original Image */}
      <div className="image-card">
        <h2 className="image-title">Original Image</h2>

        <div className="image-preview">
          {props.uploaded ? (
            <img src={props.uploaded} alt="Uploaded" className="image-full" />
          ) : (
            <p>No image selected</p>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="enhanced-image-container">
        <h2 className="section-title">Enhanced Image</h2>

        {/* Show enhanced image if available and not loading */}
        {props.enhanced && !props.loading ? (
          <>
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="preview-image"
            />
            {/* Download Button */}
            <div className="download-button-container">
              <a
                href={props.enhanced}
                download="enhanced-image.jpg" // Adjust the filename as needed
                className="download-button"
              >
                Download Enhanced Image
              </a>
            </div>
          </>
        ) : (
          // Show loading state
          props.loading ? (
            <Loading />
          ) : (
            !props.enhanced && (
              <div className="image-placeholder">
                <p>No Enhanced Image</p>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
