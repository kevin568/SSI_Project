import { Navbar } from "../component/navbar";
import React, { useState, useEffect } from "react";
import { getAllPost } from "../api";
import DeleteJob from "../component/deletejob";

const DeleteJobPage = () => {
  const [keyword, setKeyword] = useState("");
  const [cases, setPosts] = useState([]);

  const fetchAllPost = async () => {
    const res = await getAllPost();
    setPosts(res.data.data);
  };

  useEffect(() => {
    fetchAllPost();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="d-flex flex-column align-items-center">
        <div className="text-center mb-3">
          <h3>刪除工作</h3>
        </div>
        <DeleteJob data={cases} />
      </div>
    </div>
  );
};

export { DeleteJobPage };
