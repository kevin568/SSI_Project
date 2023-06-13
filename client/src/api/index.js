import axios from "axios";
const baseUrl = "http://localhost:8080/";

export const createJob = async ({ title, author, image, content }) => {
  try {
    const res = await axios.post(`${baseUrl}api/v1/posts`, {
      title,
      author,
      image,
      content,
    });
    alert("成功發布工作");
    return res;
  } catch (err) {
    console.log(err.response);
    alert("發布工作失敗");
  }
};

export const getAllPost = async () => {
  try {
    const res = await axios.get(`${baseUrl}api/v1/posts`);
    return res.data;
  } catch (err) {
    console.log(err.response);
    alert("讀取工作失敗");
  }
};

export const getPost = async ({ id }) => {
  try {
    const res = await axios.get(`${baseUrl}api/v1/posts/${id}`);
    return res.data;
  } catch (err) {
    console.log(err.response);
    alert("讀取工作失敗");
  }
};

export const deleteJob = async (id) => {
  try {
    const res = await axios.delete(`${baseUrl}api/v1/posts/${id}`);
    alert("成功刪除文章！");
    return res;
  } catch (err) {
    console.log(err.response);
    alert("刪除工作失敗");
  }
};
