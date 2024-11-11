import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // Use your backend URL

// Example API call
export const loginUser = (formData) => API.post('/auth/login', formData);
export const registerUser = (formData) => API.post('/auth/register', formData);
export const fetchAppointments = () => API.get('/appointments');
