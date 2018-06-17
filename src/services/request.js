import 'whatwg-fetch';

const BASE_URL = process.env.REACT_APP_API_URL;

const request = {
  // Return promise passing response value
  get: endpoint => {
    return fetch(BASE_URL + endpoint)
      .then(response => response.json())
      .catch(err => err);
  },

  post: (endpoint, params) => {
    return fetch(BASE_URL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => response.json());
  }
};

export default request;
