import backend from './apiSettings';

const ContactApi = {
  sendMessage: formData => {
    let message = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value
    };

    if (Math.random() < .3) return Promise.reject(new Error("Network error.")); // Simulate network error.

    return backend.post('/contact', JSON.stringify(message));
  }
};

export default ContactApi;