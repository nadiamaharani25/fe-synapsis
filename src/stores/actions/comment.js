import axios from "../../utils/axios";

// Get Post Comments
export const getPostComments = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`posts/${id}/comments`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
