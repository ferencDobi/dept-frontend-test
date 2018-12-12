import backend from './apiSettings';

const ContentApi = {
  fetchCases: limit => {
    return backend.get(`/cases?_limit=${limit}`);
  },

  fetchCategories: () => {
    return backend.get('/jobs');
  }
};

export default ContentApi;