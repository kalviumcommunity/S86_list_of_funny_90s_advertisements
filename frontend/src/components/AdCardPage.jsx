import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdCard from './AdCard.jsx';
import './AdCardPage.css';

const AdCardPage = () => {
  const [ads, setAds] = useState([]);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    year: '',
    category: '',
    created_by: ''
  });
  const [errors, setErrors] = useState({});
  const [editingAdId, setEditingAdId] = useState(null);
  const [filterUser, setFilterUser] = useState('');
  const [loadingAds, setLoadingAds] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const BASE_URL = 'http://localhost:5000/ads';
  const USER_URL = 'http://localhost:5000/auth';
  const navigate = useNavigate();

  const authHeader = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    fetchAds();
    fetchUsers();
  }, [filterUser]);

  const fetchAds = async () => {
    setLoadingAds(true);
    try {
      const res = await axios.get(BASE_URL, {
        params: { created_by: filterUser }
      });
      setAds(res.data);
    } catch (err) {
      console.error('Error fetching ads:', err);
    } finally {
      setLoadingAds(false);
    }
  };

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const res = await axios.get(USER_URL);
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoadingUsers(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.description.trim()) newErrors.description = 'Description is required.';
    if (!formData.videoUrl.trim()) newErrors.videoUrl = 'Video URL is required.';
    else if (!formData.videoUrl.startsWith('http')) newErrors.videoUrl = 'Enter a valid URL.';
    if (!formData.year || isNaN(formData.year)) newErrors.year = 'Valid year is required.';
    if (!formData.category.trim()) newErrors.category = 'Category is required.';
    if (!formData.created_by) newErrors.created_by = 'Please select a creator.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = async () => {
    if (!validateForm()) return;

    try {
      await axios.post(BASE_URL, formData, authHeader);
      setFormData({ title: '', description: '', videoUrl: '', year: '', category: '', created_by: '' });
      setErrors({});
      fetchAds();
    } catch (err) {
      console.error('Error creating ad:', err);
    }
  };

  const handleUpdate = async () => {
    if (!validateForm()) return;

    try {
      await axios.put(`${BASE_URL}/${editingAdId}`, formData, authHeader);
      setEditingAdId(null);
      setFormData({ title: '', description: '', videoUrl: '', year: '', category: '', created_by: '' });
      setErrors({});
      fetchAds();
    } catch (err) {
      console.error('Error updating ad:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`, authHeader);
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
      category: ad.category,
      created_by: ad.created_by?._id || ad.created_by
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilterUser(e.target.value);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/auth/logout", {}, { withCredentials: true });
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  
  return (
    <div className="ad-card-page">
      <div className="page-header">
  <button className="home-button" onClick={() => navigate('/')}>🏠 Back to Home</button>
  <h1 className="page-title">🌟 90s Advertisement Gallery 🌟</h1>
  <button className="logout-button" onClick={handleLogout}>Logout</button>
</div>


      {/* Filter */}
      <div className="filter-container">
        <label htmlFor="userFilter">Filter by User:</label>
        <select
          id="userFilter"
          name="userFilter"
          value={filterUser}
          onChange={handleFilterChange}
          className="filter-dropdown"
        >
          <option value="">All Users</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
      </div>

      {/* Ad Form */}
      <div className="form-container">
        <h2>{editingAdId ? 'Edit Advertisement' : 'Add New Advertisement'}</h2>

        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="input-field" />
        {errors.title && <p className="error-text">{errors.title}</p>}

        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="input-field" />
        {errors.description && <p className="error-text">{errors.description}</p>}

        <input type="text" name="videoUrl" placeholder="Video URL" value={formData.videoUrl} onChange={handleChange} className="input-field" />
        {errors.videoUrl && <p className="error-text">{errors.videoUrl}</p>}

        <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} className="input-field" />
        {errors.year && <p className="error-text">{errors.year}</p>}

        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="input-field" />
        {errors.category && <p className="error-text">{errors.category}</p>}

        <select name="created_by" value={formData.created_by} onChange={handleChange} className="input-field">
          <option value="">Select Creator</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>
        {errors.created_by && <p className="error-text">{errors.created_by}</p>}

        <button onClick={editingAdId ? handleUpdate : handleCreate} className="form-button">
          {editingAdId ? 'Update Ad' : 'Add Ad'}
        </button>
      </div>

      {/* Ads Display */}
      <div className="ads-container">
        {loadingAds ? (
          <p>Loading advertisements...</p>
        ) : (
          ads.map((ad) => (
            <div key={ad._id} className="ad-card-wrapper">
              <AdCard
                title={ad.title}
                description={ad.description}
                imageUrl={ad.imageUrl}
                year={ad.year}
                category={ad.category}
              />
              {ad.videoUrl && (
                <div className="video-preview">
                  <iframe
                    src={ad.videoUrl}
                    title="Ad Video"
                    width="100%"
                    height="200"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="ad-actions">
                <p>Created by: {ad.created_by?.name || 'Unknown'}</p>
                <button onClick={() => handleEdit(ad)} className="action-button edit-button">Edit</button>
                <button onClick={() => handleDelete(ad._id)} className="action-button delete-button">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdCardPage;
