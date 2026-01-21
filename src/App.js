import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/storeSlice";
import {  FaEye, FaThumbsDown, FaThumbsUp, FaUser } from "react-icons/fa";
function App() {
  const dispatch = useDispatch();
  const posts = useSelector((st) => st.store.allPosts);
  const loading = useSelector((st) => st.store.loading);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="bg-black text-light blur element-plan d-flex opacity-75 justify-content-center align-items-center">
          <div class="spinner-border"></div>
          <h2>&nbsp;&nbsp;Loading...</h2>
        </div>
      ) : (
        <section className="container ">
          <h2 className="posts-title fw-bold m-5">📰 Latest Posts</h2>
          <div className="posts-grid">
            {posts.map((post) => (
              <div class="card" key={post.id}>
                <div class="card-header d-flex justify-content-between fw-bold"><span><FaUser color="darkblue"/> use Id: {post.userId}</span> <span>📰 post id : {post.id}</span></div>
                <div class="card-body">
                  <h5 class="card-title">{post.title.slice(0, 10)}...</h5>
                  <p class="card-text">{post.body}</p>
                </div>
                <div className="card-footer  fw-bold d-flex justify-content-between">
                  <span>
                     <FaThumbsUp/> {post.reactions.likes}
                  </span>
                  <span>
                     <FaThumbsDown/> {post.reactions.dislikes}
                  </span>
                  <span>
                     <FaEye/> {post.views}
                  </span>

                  
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
