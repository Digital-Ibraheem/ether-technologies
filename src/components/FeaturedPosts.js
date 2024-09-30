import React, { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../assets/hooks/useIsVisible";
import { MdArticle } from "react-icons/md";
import "../assets/css/blog.css";
import { blogPosts } from "../assets/data/blogPosts.js";
import FeaturedPost from "./FeaturedPost.js";

const FeaturedPosts = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const [category, setCategory] = useState("");
  const [viewPages, setViewPages] = useState(false);
  const [posts, setPosts] = useState(true);
  const categoryList = [
    "Business",
    "Career",
    "CSS",
    "Firebase",
    "HTML",
    "JavaScript",
    "Productivity",
    "React",
    "Web Dev",
  ];
  const featuredPosts = blogPosts.slice(0, 2);

  useEffect(() => {
    if (category !== "") {
      setViewPages(true);
    }
  }, []);

  useEffect(() => {
    if (category !== "") {
      setPosts(false);
      blogPosts.map((x) => {
        if (x.postCategories.includes(category)) {
          setPosts(true);
        }
      });
    } else {
      setPosts(true);
    }
  }, [category]);

  return (
    <div className="our-services past-projects our-blog blog">
      <div className="our-services-container">
        <div className="blob"></div>
        <h2
          ref={ref1}
          className={`our-services-title  ${
            isVisible1 && "move-in move-in-top"
          }`}
        >
          {!viewPages ? "Featured" : category === "" ? "All" : category}{" "}
          <span>Posts</span>.
        </h2>
        <MdArticle
          className={`phone  ${isVisible1 && "move-in move-in-top"}`}
        />

        <div className="post-container">
          <div
            ref={ref2}
            className={`featured-posts-container  ${
              isVisible2 && "move-in move-in-right"
            }`}
          >
            <div id="featured-posts" className="container featured-posts">
              {viewPages
                ? blogPosts.map((x) => {
                    if (category == "" || x.postCategories.includes(category)) {
                      return <FeaturedPost x={x} setCategory={setCategory} />;
                    }
                  })
                : featuredPosts.map((x) => (
                    <FeaturedPost x={x} setCategory={setCategory} />
                  ))}
              {!posts && (
                <div className="no-posts">
                  <h3>
                    There are yet to be any posts made with that category.
                  </h3>
                  <p>Stay tuned for more blog posts!</p>
                </div>
              )}
            </div>
            <div className="categories">
              <div>
                <h4 className="categories-title">Categories</h4>
                <div>
                  <p
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setViewPages(true);
            setCategory("");
          }}
          className={`btn-solid home-btn ${
            viewPages && category === "" ? "hide-btn" : ""
          }`}
        >
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default FeaturedPosts;
