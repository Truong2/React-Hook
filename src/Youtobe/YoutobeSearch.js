import React from "react";
import "./YoutobeSearch.scss";
import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
const YoutobeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {}, []);
  const handleSearchYoutobe = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyDJopwI9OJKXzqqqyYIysKh5gMgfvTGfvc",
        type: "video",
        q: query,
      },
    });
    if (res && res.data.items.length > 0) {
      let results = [];
      let raw = res.data.items;
      raw.map((item) => {
        let object = {};
        object.id = item.id.videoId;
        object.title = item.snippet.title;
        object.createAt = item.snippet.publishedAt;
        object.description = item.snippet.description;
        results.push(object);
      });
      setVideos(results);
    }
  };
  return (
    <>
      <div className="youtobe-search-container">
        <div className="yt-search">
          <input
            className="input-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Tìm Kiếm"
          />
          <button
            className="button-search"
            onClick={handleSearchYoutobe}
            type="button"
          >
            Search
          </button>
        </div>
        <div className="yt-content">
          {videos &&
            videos.length > 0 &&
            videos.map((item) => {
              return (
                <div className="yt-searchList" key={item.id}>
                  <div className="yt-content-item">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${item.id}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="yt-searchContent">
                    <div className="title">{item.title}</div>
                    <div className="create-at">
                      Create-At: {dayjs(item.createAt).format("DD-MM-YYYY")}
                    </div>
                    <div className="description">{item.description}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default YoutobeSearch;
