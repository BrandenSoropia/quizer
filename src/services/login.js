import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export default function login(login_key) {
  return axios.post(`${baseUrl}/users/login`, { login_key }).then(response => {
    if (response.data.length === 0) {
      alert('invalid username');
    } else {
      console.log('valid username');
      return response.data[0]._id;
    }
  });
}
