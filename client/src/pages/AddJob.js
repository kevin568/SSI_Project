import React, { useState } from "react";
import { useSelector } from "react-redux";

import { createJob } from "../api";

import { Navbar } from "../component/navbar";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const author = useSelector((state) => state.account.user.name);

  const handleAddPost = async () => {
    const res = await createJob({ title, author, image, content });
    setTitle("");
    setImage("");
    setContent("");
  };

  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="d-flex flex-column align-items-center">
        <div className="w-50 p-3 border border-dark rounded shadow-sm bg-white">
          <div className="mb-3">
            <h2>工作名稱</h2>
          </div>
          <input
            type="text"
            placeholder={"工作名稱"}
            value={title}
            maxLength={100}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control mb-3"
          ></input>

          {/* <div className="mb-3">
            <h2>發布者</h2>
          </div>
          <input
            type="text"
            placeholder={"發布者名稱"}
            value={author}
            maxLength={100}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control mb-3"
          ></input> */}
          <div>
            <h2>公司封面圖</h2>
            <small className="text-muted">請輸入圖片網址</small>
          </div>
          <input
            type="text"
            placeholder={"封面圖"}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="form-control mb-3"
          ></input>
          <div>
            <h2>內容</h2>
          </div>
          <textarea
            type="text"
            placeholder={"內容"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control mb-3"
            style={{ height: "320px" }}
          ></textarea>
        </div>
        <button onClick={handleAddPost} className="btn btn-outline-dark my-3">
          發布工作
        </button>
      </div>
    </div>
  );
};

export { AddJob };
