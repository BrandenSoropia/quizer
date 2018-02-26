import 'whatwg-fetch';

// TODO: Read from env to get prod url
const baseURL = 'http://localhost:3000';

const api = {
  // Return promise passing response value
  get: endpoint => {
    return fetch(baseURL + endpoint)
      .then(response => response.json())
      .catch(err => err);
  },

  post: (endpoint, params) => {
    return fetch(
      baseURL + endpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      .then(response => response.json())
      .catch(err => err);
  }
};

export default api;