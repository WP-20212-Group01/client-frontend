const axios = require('axios').default;
const adminToken = localStorage.getItem('adminToken');
axios.defaults.baseURL = 'https://wpnotwp.kcbtathust.tech/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${adminToken}`;
export default axios;