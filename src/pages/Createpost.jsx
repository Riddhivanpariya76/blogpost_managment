import React, { useEffect, useState } from "react";
import {
  FaHeading,
  FaUser,
  FaLink,
  FaTimes,
  FaRegPaperPlane,
  FaCloudUploadAlt,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import "./Createpost.css";

const Createpost = () => {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: authData?.name || '',
    imageUrl: '',
    imageType: 'url'
  });

  const fileInputRef = useRef(null);

  const [imagePreview, setImagePreview] = useState(null);

  const handleFileTypeChange = (type) => {
    setFormData(prev => ({ ...prev, imageType: type }));
    if (type === 'url') {
      setImagePreview(FormData.imageUrl);
    } else {
      setImagePreview(null);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setImagePreview(null);
    if (formData.imageType === 'url'){
      setFormData(prev => ({ ...prev, imageType: ''}));
    }
  };

  // useEffect() => {
  //   if (id) {
  //     setIsEditMode(true);
  //     const fetchPostToEdit = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:3000/posts/$(id)`);
  //         if (response.ok) {
  //           title: post.title,
  //           description: post.description || postMessage.content || '',
  //           author: post.author,
  //           imageUrl
  //         }
  //       }
  //     }
  //   }
  // }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const 
  //   }
  // }
  return (
    <div className="create-post-page">
      <Navbar />
      <div className="create-post-container">
        <header className="form-header">
          <h1>Create New Post</h1>
          <p>Share your thoughts and stories with the world</p>
        </header>

        <div className="post-form-card">
          <form action="">
            <div className="form-group">
              <label htmlFor="">Post Title</label>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Enter a catchy title..."
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="">Authoor Name</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="">Description</label>
              <textarea
                name="description"
                id=""
                className="form-control"
                placeholder="What's on your mind? write your story here"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="">Cover Image</label>
              { !imagePreview ? (
                <>
                 <div className="image-source-tabs">
                <button className={`tab-btn ${FormData.imageType === 'url' ? 'active' : ''}`} type="button">
                  Image URL
                </button>

                <button className={`tab-btn ${FormData.imageType === 'file' ? 'active' : ''}`} type="button">
                  Upload File
                </button>
              </div>
              {formData.imageType === 'url' ? (
                <div className="input-wrapper">
                <FaLink className="input-icon" />
                <input
                  type="url"
                  name="imageUrl"
                  className="form-control"
                  placeholder="Paste image URL here (e.g. https://...)"
                />
              </div>
              ) }
                </>
              ) : (<div className="image-preview-container">
                <img src="" alt="Preview" className="image-preview" />
                <button className="remove-image-btn" type="button">
                  <FaTimes />
                </button>
              </div>
            )}

              

              

              <div className="image-upload-area">
                <FaCloudUploadAlt className="upload-icon" />
                <p>Click to upload image from your device</p>
                <input 
                      type="file" 
                      ref={fileInputRef}
                      style={{ display: "none"}}
                      accept="image/*"
                      onChange={handleFileChange}
                 />
              </div>

              
            </div>

            <div className="form-action-row">
              <button className="submit-btn" type="submit">
                <FaRegPaperPlane /> Publish Post
              </button>

              <button className="cancle-btn" type="button">
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
