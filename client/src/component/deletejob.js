import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dataformoriluze";

export default function DeleteJob(props) {
  const { data } = props;

  return (
    <div className="container">
      {data.map((el, index) => (
        <Link
          to={`/delete_job/${el._id}`}
          className="w-100 card border-dark rounded shadow-sm overflow-hidden m-2"
          key={index}
        >
          <img src={el.image} alt={"cover"} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{el.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <span>{el.author}</span>
              <span className="ml-2">{formatDate(el.Time)}</span>
            </h6>
            <p className="card-text">{el.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
