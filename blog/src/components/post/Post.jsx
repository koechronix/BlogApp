import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1625973385769-b9113cf6c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt=""
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <Link to="/post/:postId" className="link">
          <span className="postTitle"> Lorem ipsum dolor sit amet </span>
        </Link>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate
        enim rem odit perferendis minus harum explicabo placeat iusto minima
        aliquam ipsa corporis nisi iste pariatur architecto obcaecati facere,
        non odio cum alias cupiditate. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sit voluptate enim rem odit perferendis minus harum
        explicabo placeat iusto minima aliquam ipsa corporis nisi iste pariatur
        architecto obcaecati facere, non odio cum alias cupiditate.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sit voluptate enim rem odit
        perferendis minus harum explicabo placeat iusto minima aliquam ipsa
        corporis nisi iste pariatur architecto obcaecati facere, non odio cum
        alias cupiditate.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sit voluptate enim rem odit perferendis minus harum explicabo
        placeat iusto minima aliquam ipsa corporis nisi iste pariatur architecto
        obcaecati facere, non odio cum alias cupiditate.
      </p>
    </div>
  );
}
