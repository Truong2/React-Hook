import React from "react";
import "../styles/Modal.scss";
import { useState } from "react";
import axios from "axios";
const Modal = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleOnChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleOnClickCloseModal = () => {
    props.handleOnClickCloseModal();
  };
  const handleOnClickSubmit = async (e) => {
    e.preventDefault();
    if (title === "" && content === "") {
      alert("Mời nhập thông tin");
    }
    if (title === "") {
      alert("Mời nhập tiêu đề");
    } else if (content === "") {
      alert("Mời nhập nội dung");
    }
    let data = {
      name: title,
      content: content,
      userId: 1,
    };
    let res = await axios.post(
      "https://61b561e90e84b70017331af3.mockapi.io/API/Facebook/Blog",
      data
    );
    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddBlog(newBlog);
    }
  };
  return (
    <>
      <div className="Modal">
        <div className="Modal-overlay">
          <div className="Modal-Blog">
            <form>
              <label for="fname">Title</label>
              <input
                type="text"
                id="fname"
                value={title}
                name="title"
                placeholder="Title.."
                onChange={(e) => handleOnChangeTitle(e)}
              />
              <label for="lname">Avatar</label>
              <input
                type="text"
                id="lname"
                value={content}
                name="content"
                placeholder="Avatar.."
                onChange={(e) => handleOnChangeContent(e)}
              />
              <input
                type="submit"
                value="Submit"
                onClick={(e) => handleOnClickSubmit(e)}
              />
            </form>
            <div className="Modal-close">
              <i className="fas fa-times" onClick={handleOnClickCloseModal}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
