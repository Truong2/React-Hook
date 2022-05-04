import React from "react";
import { useParams, useNavigate } from "react-router";
import useFetch from "../Custom/Fetch";
import Loading from "../view/Loading";
import "./BlogDetail.scss";
const BlogDetail = () => {
  let { id } = useParams();
  const {
    data: dataBlog,
    loading,
    isError,
  } = useFetch(
    `https://61b561e90e84b70017331af3.mockapi.io/API/Facebook/Blog/${id}`,
    false
  );
  let navigate = useNavigate();
  const handleOnClickReturn = () => {
    navigate("/blog");
  };
  return (
    <div className="BlogDetail-container">
      <div className="blog-item">
        {loading === true && <Loading />}
        <div className="blog-id">{id}</div>
        <div className="title">{dataBlog.name}</div>
        {/* <div className="blog-content">{dataBlog.avatar}</div> */}
        <img src={dataBlog.avatar} alt="" />
        <button
          className="Return"
          types="button"
          onClick={() => handleOnClickReturn()}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
