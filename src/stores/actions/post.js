import axios from "../../utils/axios";

// Get Post
export const getPost = (page) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`posts?per_page=8&page=${page}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

// Get Post Detail[id]
export const getPostDetail = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`posts/${id}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
