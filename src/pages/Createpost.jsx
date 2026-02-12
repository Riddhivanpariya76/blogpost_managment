import React from "react";
import {
  FaHeading,
  FaUser,
  FaLink,
  FaTimes,
  FaRegPaperPlane,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import "./Createpost.css";

const Createpost = () => {
  return (
    <div className="create-post-page">
      
        <Navbar/>
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

              <div className="image-source-tabs">
                <button className="tab-btn active" type="button">
                  Image URL
                </button>

                <button className="tab-btn" type="button">
                  Upload File
                </button>
              </div>

              <div className="input-wrapper">
                <FaLink className="input-icon" />
                <input
                  type="url"
                  name="imageUrl"
                  className="form-control"
                  placeholder="Paste image URL here (e.g. https://...)"
                />
              </div>

              <div className="image-upload-area">
                <FaCloudUploadAlt className="upload-icon" />
                <p>Click to upload image from your device</p>
              </div>

              <div className="image-preview-container">
                <img src="" alt="Preview" className="image-preview" />
                <button className="remove-image-btn" type="button">
                  <FaTimes />
                </button>
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
