import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../assets/data/blogPosts";

const BlogPost = ({ setScrolled }) => {
  const { id } = useParams();
  const {
    postTitle,
    postImage,
    postDate,
    postHook,
    postContent,
    postCategories,
  } = blogPosts.find(({ postId }) => postId === id);
  const featuredPosts = blogPosts.filter(post => post.postId !== id).slice(0, 3);

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [navigate])

  useEffect(() => {
    document.title = 'Ether Technologies | Blog'
  }, [])

  return (
    <main>
      <Navbar setScrolled={setScrolled} />
      <div className="post-container">
        <div className="post">
          <div className="blog-post">
            <h1 className="our-services-title blog-post-title">{postTitle}</h1>
            <div className="post-categories">
              {postCategories.map((y) => (
                <p>{y.toLocaleUpperCase()}</p>
              ))}
            </div>
            <p className="featured-post-date">{postDate}</p>
            <img className="featured-post-image blog-post-image" src={postImage} alt="" />
            <p className="blog-post-text">{postHook}</p>
            {postContent}
          </div>
          <div className="categories popular-posts">
            <div>
              <h4 className="categories-title">Popular Posts</h4>
              <div>
                {/* <p
                onClick={() => setCategory("")}
                className={`category-selector ${
                  category === "" ? "link-selected" : ""
                }`}
              >
                All Categories
              </p>
              {categoryList.map((x) => (
                <p
                  onClick={() => setCategory(x)}
                  className={`category-selector ${
                    category === x ? "link-selected" : ""
                  }`}
                >
                  {x}
                </p>
              ))} */}
                {featuredPosts.map((x) => (
                    <Link to={`/blog/${x.postId}`}>
                      <div className="popular-post">
                        <img src={x.postImage} alt="" />
                        <div>
                          <h4>{x.postTitle}</h4>
                          {/* <div className="post-categories popular-posts-categories">
                            {postCategories.map((y) => (
                              <p>{y.toLocaleUpperCase()}</p>
                            ))}
                          </div> */}
                          <p>{x.postDate}</p>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default BlogPost;
