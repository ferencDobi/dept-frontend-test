import backend from './apiSettings';

const ContentApi = {
  fetchCases: limit => {
    return backend.get(`/cases?_limit=${limit}`);
  },

  fetchCasesByCategory: (job, industry, limit) => {
    let filters = [];

    job && filters.push(`category.job=${job}`);
    industry && filters.push(`category.industry=${industry}`);
    limit && filters.push(`_limit=${limit}`);

    return backend.get(`/cases?${filters.join('&')}`);
  },

  fetchCategories: () => {
    return backend.get('/jobs');
  }
};

export default ContentApi;