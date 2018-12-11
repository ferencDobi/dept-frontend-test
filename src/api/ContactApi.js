import backend from './apiSettings';

const ContactApi = {
  sendMessage: message => {
    if (Math.random() < .1)
      return Promise.reject(new Error("Network error.")); // Simulate network error.

    return backend.post('/contact', JSON.stringify(message));
  }
};

export default ContactApi;