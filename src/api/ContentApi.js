import backend from './apiSettings';

const ContentApi = {
  fetchCases: limit => {
    return backend.get(`/cases?_limit=${limit}`);
  }
};

export default ContentApi;