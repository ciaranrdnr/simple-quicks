import axios from "axios";
import { reject, resolve } from "q";
const RootPath = "https://610ab45252d56400176aff22.mockapi.io";
// const RootPath = "http://localhost:3004";
const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${RootPath}/${path}`).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const Post = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${RootPath}/${path}`, data).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};
const Put = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${RootPath}/${path}`, data).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};
const Delete = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${RootPath}/${path}`, data).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

// GET
const getTasksAPI = () => Get("tasks");
// POST
const postTaskAPI = (data) => Post("tasks", data);
// PUT
const updateTaskAPI = (data, id) => Put(`tasks/${id}`, data);
// DELETE
const deleteTaskAPI = (id) => Delete(`tasks/${id}`);

const API = {
  getTasksAPI,
  postTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
};
export default API;
