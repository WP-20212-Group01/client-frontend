const axios = require('axios').default;
axios.defaults.baseURL = 'https://wpnotwp.kcbtathust.tech/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';
export default axios;