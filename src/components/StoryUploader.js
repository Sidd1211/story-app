import React from 'react';
import './StoryUploader.css';

const StoryUploader = ({ addStory }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof addStory === 'function') {
        addStory(reader.result);
      } else {
        console.error('addStory is not a function');
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-button">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        id="file-upload"
        style={{ display: 'none' }}
      />
      <label htmlFor="file-upload" className="upload-button-label">
        <i className="upload-icon">+</i>
      </label>
    </div>
  );
};

export default StoryUploader;
