import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

// Projects
export const getProjects = () => api.get('/projects');
export const createProject = (data) => api.post('/projects', data);

// Certificates
export const getCertificates = () => api.get('/certificates');
export const createCertificate = (data) => api.post('/certificates', data);

// Achievements
export const getAchievements = () => api.get('/achievements');
export const createAchievement = (data) => api.post('/achievements', data);

// Education
export const getEducation = () => api.get('/education');

// Contact
export const sendMessage = (data) => api.post('/contact', data);

export default api;
