import axios from 'axios';

const backend = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

const ContentApi = {
  fetchCases: limit => {
    return backend.get(`/cases?_limit=${limit}`);
  }
};

export default ContentApi;