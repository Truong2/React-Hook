import "./styles/App.scss";
import Covid from "./view/Covid";
import Blog from "./view/Blogs";
import BlogDetail from "./BlogDetail/BlogDetail";
import Nav from "./Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" />
          <Route path="/Covid" exact element={<Covid />} />
          <Route path="/About" />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:id" exact element={<BlogDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
