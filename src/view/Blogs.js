import React from "react";
import useFetch from "../Custom/Fetch";
import "../styles/Blogs.scss";
import Loading from "./Loading";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Blogs = () => {
  const [isModal, setIsModal] = useState(false);
  const [newDataBlog, setNewDataBlog] = useState([]);
  const {
    data: dataBlog,
    loading,
    isError,
  } = useFetch(
    `https://61b561e90e84b70017331af3.mockapi.io/API/Facebook/Blog`,
    false
  );
  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let newData = dataBlog.reverse();
      setNewDataBlog(newData);
    }
  }, [dataBlog]);
  const handleOnClickModal = () => {
    setIsModal(true);
  };
  const handleOnClickCloseModal = () => setIsModal(false);
  const handleAddBlog = (blog) => {
    let data = newDataBlog;
    data.unshift(blog);
    setNewDataBlog(data);
    setIsModal(false);
  };
  return (
    <>
      <div className="Blog">
        <div className="Create-Blog">
          <button type="button" onClick={handleOnClickModal}>
            Create
          </button>
        </div>
        <div className="Blog-container">
          {loading === true && <Loading />}
          {newDataBlog &&
            newDataBlog.length > 0 &&
            newDataBlog.map((item, index) => {
              return (
                <>
                  <div className="blog-item" key={index}>
                    <div className="blog-id">
                      <Link to={`/blog/${item.id}`}>{item.id}</Link>
                    </div>
                    <div className="title">{item.name}</div>
                    <div className="blog-content">{item.content}</div>
                    <img src={item.avatar} alt="" />
                  </div>
                </>
              );
            })}
        </div>
        {isModal === true ? (
          <Modal
            handleOnClickCloseModal={handleOnClickCloseModal}
            handleAddBlog={handleAddBlog}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Blogs;
