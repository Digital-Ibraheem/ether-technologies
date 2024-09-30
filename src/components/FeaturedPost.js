import React from "react";
import { Link } from "react-router-dom";

const FeaturedPost = ({ x, setCategory }) => {
  return (
    <div className="featured-post">
      <Link to={`/blog/${x.postId}`}>
        <img className="featured-post-image" src={x.postImage} alt="" />
      </Link>
      <Link to={`/blog/${x.postId}`}>
        <h3>{x.postTitle}</h3>
      </Link>
      <div className="post-categories">
        {x.postCategories.map((y) => (
          <p onClick={() => setCategory(y)}>{y.toLocaleUpperCase()}</p>
        ))}
      </div>
      <p className="featured-post-date">{x.postDate}</p>
      <p>{x.postHook.substring(0, x.postHook.length - 10)}...</p>
      <Link to={`/blog/${x.postId}`}>
        <p className="link-selected">Continue Reading..</p>
      </Link>
    </div>
  );
};

export default FeaturedPost;
