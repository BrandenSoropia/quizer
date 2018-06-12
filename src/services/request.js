import 'whatwg-fetch';

const request = {
  // Return promise passing response value
  get: endpoint => {
    return fetch('/api' + endpoint)
      .then(response => response.json())
      .catch(err => err);
  },

  post: (endpoint, params) => {
    return fetch('/api' + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => response.json());
  }
};

export default request;
