import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdCard from './AdCard.jsx';
import './AdCardPage.css';  // Importing the updated CSS file

const AdCardPage = () => {
  const [ads, setAds] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    year: '',
    category: ''
  });
  const [editingAdId, setEditingAdId] = useState(null);

  const BASE_URL = 'http://localhost:5000/ads';

  const fetchAds = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setAds(res.data);
    } catch (err) {
      console.error('Error fetching ads:', err);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleCreate = async () => {
    try {
      await axios.post(BASE_URL, formData);
      setFormData({ title: '', description: '', videoUrl: '', year: '', category: '' });
      fetchAds();
    } catch (err) {
      console.error('Error creating ad:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchAds();
    } catch (err) {
      console.error('Error deleting ad:', err);
    }
  };

  const handleEdit = (ad) => {
    setEditingAdId(ad._id);
    setFormData({
      title: ad.title,
      description: ad.description,
      videoUrl: ad.videoUrl,
      year: ad.year,
      category: ad.category
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${BASE_URL}/${editingAdId}`, formData);
      setEditingAdId(null);
      setFormData({ title: '', description: '', videoUrl: '', year: '', category: '' });
      fetchAds();
    } catch (err) {
      console.error('Error updating ad:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="ad-card-page">
      <h1 className="page-title">🌟 90s Advertisement Gallery 🌟</h1>

      {/* Form for adding new ads */}
      <div className="form-container">
        <h2>{editingAdId ? 'Edit Advertisement' : 'Add New Advertisement'}</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL (YouTube Embed)"
          value={formData.videoUrl}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Food, Tech)"
          value={formData.category}
          onChange={handleChange}
          className="input-field"
        />
        <button
          onClick={editingAdId ? handleUpdate : handleCreate}
          className="form-button"
        >
          {editingAdId ? 'Update Ad' : 'Add Ad'}
        </button>
      </div>

      {/* Display Ads */}
      <div className="ads-container">
        {ads.map((ad) => (
          <div key={ad._id} className="ad-card-wrapper">
            <AdCard
              title={ad.title}
              description={ad.description}
              imageUrl={ad.imageUrl}
              year={ad.year}
              category={ad.category}
            />
            <div className="ad-actions">
              <button onClick={() => handleEdit(ad)} className="action-button edit-button">Edit</button>
              <button onClick={() => handleDelete(ad._id)} className="action-button delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdCardPage;
