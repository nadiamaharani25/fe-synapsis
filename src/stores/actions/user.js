import axios from "../../utils/axios";

// Get User
export const getUser = (page = 1, name = "") => {
  return new Promise((resolve, reject) => {
    axios
      .get(`users?page=${page}&name=${name}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// Add User
export const addUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`users`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// Update User
export const updateUser = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`users/${id}`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// Delete User
export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`users/${id}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
