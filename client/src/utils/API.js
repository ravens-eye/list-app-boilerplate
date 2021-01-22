import axios from 'axios';

export default {
  testBackEnd: () => {
    return axios.get("/api/test");
  },
};