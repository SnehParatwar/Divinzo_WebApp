import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../admindashboard/styles/AddCollections.css';

const AddCollections = () => {
  const [formData, setFormData] = useState({
    collectionName: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    h1Tag: '',
    status: 'active',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setFormData({
      ...formData,
      description: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2>Collection Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="collectionName">Collection Name</label>
          <select
            id="collectionName"
            name="collectionName"
            value={formData.collectionName}
            onChange={handleChange}
            className={formData.collectionName === "" ? "placeholder" : ""} // Add class conditionally
          >
            <option value="" >--Select--</option>
            <option value="collection1">Collection 1</option>
            <option value="collection2">Collection 2</option>
            <option value="collection3">Collection 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.description}
            onChange={handleDescriptionChange}
            config={{
              height: 200
            }}
          />
        </div>
        <div className="form-group horizontal-group">
          <div className="form-group-inner">
            <label htmlFor="metaTitle">Meta Title</label>
            <input
              type="text"
              id="metaTitle"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              placeholder="Meta Title"
            />
          </div>
          <div className="form-group-inner">
            <label htmlFor="metaDescription">Meta Description</label>
            <input
              type="text"
              id="metaDescription"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              placeholder="Meta Description"
            />
          </div>
        </div>
        <div className="form-group horizontal-group">
          <div className="form-group-inner">
            <label htmlFor="metaKeywords">Meta Keywords</label>
            <input
              type="text"
              id="metaKeywords"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              placeholder="Meta Keywords"
            />
          </div>
          <div className="form-group-inner">
            <label htmlFor="h1Tag">H1 Tag</label>
            <input
              type="text"
              id="h1Tag"
              name="h1Tag"
              value={formData.h1Tag}
              onChange={handleChange}
              placeholder="H1 Tag"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Status</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === 'active'}
                onChange={handleChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={formData.status === 'inactive'}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>
        <button type="submit">Add Collection</button>
      </form>
    </div>
  );
};

export default AddCollections;
