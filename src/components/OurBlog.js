import React, { useRef } from 'react'
import Wave4 from '../assets/svgs/wave4.svg'
import { MdArticle } from 'react-icons/md'
import { useIsVisible } from '../assets/hooks/useIsVisible'
import { Link } from 'react-router-dom'
import { blogPosts } from '../assets/data/blogPosts'

const OurBlog = () => {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);
    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

  return (
    <div className='our-services past-projects our-blog'>
        <img src={Wave4} alt="" />
        <div className="our-services-container">
        <div className="blob"></div>
        <h2 ref={ref1} className={`our-services-title hide ${isVisible1 && "move-in move-in-top"}`}>Our <span>Blog</span>.</h2>
            <MdArticle className={`phone hide ${isVisible1 && "move-in move-in-top"}`}/>
            <div ref={ref2} className={`our-services-row container hide ${isVisible2 && "move-in move-in-right"}`}>
                {blogPosts.slice(0, 3).map(x => (
                    <div style={{backgroundImage: `url(${x.postImage})`}} className="our-service container past-project our-blog-post">
                        <h4>{x.postTitle}</h4>
                        <p>{x.postHook.length > 85 ? x.postHook.substring(0, 85) + "..." : x.postHook}</p>
                        <Link to={`/blog/${x.postId}`}><button className='btn-solid home-btn'>View Post</button></Link>
                        <div className="inner-gradient"></div>
                        <div className="mute-background"></div>
                    </div>
                ))}
            </div>
            <button className={`btn-solid home-btn hide ${isVisible2 && "move-in move-in-bottom"}`}>
                <Link to='/blog'>View All Pages</Link>
            </button>
        </div>
    </div>
  )
}

export default OurBlog