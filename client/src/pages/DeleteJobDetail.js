import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { getPost } from "../api";
import { formatDate } from "../utils/dataformoriluze";
import { deleteJob } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteJobDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  });

  const fetchPost = async () => {
    const res = await getPost({ id });
    setPost(res.data.data);
  };

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    await deleteJob(id);
    navigate("/");
  };
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="d-flex flex-column align-items-center">
        <div className="card border-dark rounded shadow-sm overflow-hidden w-50">
          <img src={post.image} alt={""} className="card-img-top" />
          <div className="card-body">
            <h3 className="card-title">{post.title}</h3>
            <h6 className="card-subtitle mb-2 text-muted">
              <span>{post.author}</span>
              <span className="ml-2">{formatDate(post.Time)}</span>
            </h6>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark mt-3"
          onClick={handleButtonClick}
        >
          刪除工作
        </button>
      </div>
    </div>
  );
};

export { DeleteJobDetail };
