import axios from 'axios';

export default {
  testBackEnd: () => {
    return axios.get("/api/test");
  },
  getAllLists: () => {
    return axios.get("/api/grocery-lists");
  },
  getList: (id) => {
    return axios.get("/api/grocery-lists/" + id);
  },
  addList: (listData) => {
    return axios.post("/api/grocery-lists", listData);
  },
  updateList: ({ id, updateData }) => {
    return axios.put("/api/grocery-lists/" + id, updateData);
  },
  deleteList: (id) => {
    return axios.get("/api/grocery-lists/" + id);
  },
};