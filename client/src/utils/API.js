import axios from 'axios';

const API = {

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
  getAllItems: () => {
    return axios.get("/api/grocery-items");
  },
  getListItem: (id) => {
    return axios.get("/api/grocery-items/" + id);
  },
  addListItem: (listItemData) => {
    return axios.post("/api/grocery-items", listItemData);
  },
  updateListItem: ({ id, updateData }) => {
    return axios.put("/api/grocery-items/" + id, updateData);
  },
  deleteListItem: (id) => {
    return axios.get("/api/grocery-items/" + id);
  },
};

export default API;