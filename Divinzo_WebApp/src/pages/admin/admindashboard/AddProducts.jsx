import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDropzone } from 'react-dropzone';
import '../admindashboard/styles/AddProducts.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    collection: '',
    subCollection: '',
    images: [],
    description: '',
    sellingPrice: '',
    mrp: '',
    sku: '',
    stockQuantity: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    h1Tag: '',
    status: 'active',
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

  const onDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      images: [...formData.images, ...acceptedFiles],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="form-container">
      <h2>Product Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group horizontal-group">
          <div className="form-group-inner">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Product Name"
            />
          </div>
          <div className="form-group-inner">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Brand"
            />
          </div>
        </div>
        <div className="form-group horizontal-group">
          <div className="form-group-inner">
            <label htmlFor="collection">Collection</label>
            <select
              id="collection"
              name="collection"
              value={formData.collection}
              onChange={handleChange}
              className={formData.collection === "" ? "placeholder" : ""}
            >
              <option value="">--Select--</option>
              <option value="collection1">Collection 1</option>
              <option value="collection2">Collection 2</option>
              <option value="collection3">Collection 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group-inner">
            <label htmlFor="subCollection">Sub Collection</label>
            <select
              id="subCollection"
              name="subCollection"
              value={formData.subCollection}
              onChange={handleChange}
              className={formData.subCollection === "" ? "placeholder" : ""}
            >
              <option value="">--Select--</option>
              <option value="subCollection1">Sub Collection 1</option>
              <option value="subCollection2">Sub Collection 2</option>
              <option value="subCollection3">Sub Collection 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.description}
            onChange={handleDescriptionChange}
            config={{
              height: '300px' // Set height here
            }}
            onReady={(editor) => {
              // Suppress file upload error
              editor.plugins.get('FileRepository').createUploadAdapter = () => {
                return {
                  upload() {
                    return Promise.reject('Upload not implemented.');
                  },
                };
              };
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Images</label>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <div className="image-preview">
            {formData.images.map((file, index) => (
              <img key={index} src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
            ))}
          </div>
        </div>
        <div className="form-group horizontal-group">
          <div className="form-group-inner">
            <label htmlFor="sellingPrice">Selling Price</label>
            <input
              type="number"
              id="sellingPrice"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              placeholder="Selling Price"
            />
          </div>
          <div className="form-group-inner">
            <label htmlFor="mrp">MRP</label>
            <input
              type="number"
              id="mrp"
              name="mrp"
              value={formData.mrp}
              onChange={handleChange}
              placeholder="MRP"
            />
          </div>
        </div>
        <div className="form-group horizontal-group">
          <div className="form-group-inner">
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              placeholder="SKU"
            />
          </div>
          <div className="form-group-inner">
            <label htmlFor="stockQuantity">Stock Quantity</label>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              placeholder="Stock Quantity"
            />
          </div>
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
