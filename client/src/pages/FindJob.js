import { Navbar } from "../component/navbar";
import React, { useState, useEffect } from "react";
import { getAllPost } from "../api";
import Job from "../component/job";

const FindJob = () => {
  const [keyword, setKeyword] = useState("");
  const [cases, setPosts] = useState([]);

  const fetchAllPost = async () => {
    const res = await getAllPost();
    setPosts(res.data.data);
  };

  useEffect(() => {
    fetchAllPost();
  });

  const handleSearch = () => {
    alert("搜尋： " + keyword);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="d-flex flex-column align-items-center">
        <div className="text-center mb-3">
          <h3>找工作</h3>
        </div>
        <Job data={cases} />
      </div>
    </div>
  );
};

export { FindJob };
