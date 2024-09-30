import Post1 from "../../components/posts/Post1";
import MobileFirst from '../../assets/images/blog/mobile-first.jpg'
import WebsiteNeeds from '../images/blog/websiteneeds.jpg'
import React from "react";
import Post2 from "../../components/posts/Post2";
import Post3 from "../../components/posts/Post3";
import WebsiteSpeed from '../../assets/images/blog/website-speed.jpg'
import Minimalism from '../../assets/images/blog/minimalism.jpg'
import Post4 from "../../components/posts/Post4";
import Post5 from "../../components/posts/Post5";
import Contractor from '../images/blog/contracting.webp'

export const blogPosts = [
  {
    postTitle: "10 Things Your Website Needs in 2024",
    postCategories: ["Business", "Web Dev"],
    postImage: WebsiteNeeds,
    postDate: "Jul. 23, 2024",
    postHook:
      "In the rapidly evolving digital landscape of 2024, ensuring your website remains competitive and relevant is more crucial than ever. With new technologies, user expectations, and SEO algorithms constantly changing, here are ten essential elements your website needs to thrive this year.",
    postId: "10-things-your-website-needs-in-2024",
    postContent: <Post1 />,
  },
  {
    postTitle: "Mastering Mobile-First Design: Best Practices for 2024",
    postCategories: ["Web Dev", "CSS", "HTML"],
    postImage: MobileFirst,
    postDate: "Aug. 10, 2024",
    postHook:
      "As we move further into 2024, mobile-first design has become a crucial strategy for web development. With the majority of users accessing the web via mobile devices, it's essential to prioritize mobile usability. This article delves into the best practices for mastering mobile-first design in 2024.",
    postId: 'mastering-mobile-first-design',
    postContent: <Post2 />
    },
  {
    postTitle: "Maximizing Website Speed: Best Practices for Faster Load Times in 2024",
    postCategories: ["JavaScript", "Web Dev", "HTML", "CSS"],
    postImage: WebsiteSpeed,
    postDate: "Aug 20, 2024",
    postHook:
      "In the digital age, website speed is more crucial than ever. A slow-loading website can drive visitors away, hurt your SEO rankings, and negatively impact your bottom line. As we step into 2024, it’s essential to prioritize website speed to ensure a seamless user experience. This article explores the best practices for maximizing website speed and achieving faster load times.",
    postId: 'maximizing-website-speed',
    postContent: <Post3 />
    },
    {
      postTitle: "The Evolution of Web Design: How Minimalism is Shaping The Industry",
      postCategories: ["Web Dev", "CSS"],
      postImage: Minimalism,
      postDate: "May 14, 2024",
      postHook:
        "Minimalism in web design has evolved from a niche trend to a mainstream approach, shaping the way websites are built in 2024. With an emphasis on simplicity, functionality, and user experience, minimalism offers a clean, efficient way to communicate ideas online. This article explores how minimalism is influencing web design in 2024 and provides tips for implementing this approach effectively.",
      postId: 'the-evolution-of-web-design',
      postContent: <Post4 />
    },
    {
      postTitle: "Elevating Your General Contracting Business in 2024",
      postCategories: ['Business', 'Career', 'Web Dev'],
      postImage: Contractor,
      postDate: "September 26, 2024",
      postHook: "As a general contracting business owner, you know that delivering quality work is only half the battle. In today’s digital age, your business needs more than just great craftsmanship—it needs a strong online presence to truly stand out. Whether you're specializing in residential or commercial projects, the key to elevating your business lies in a modern and effective digital strategy.",
      postId: "elevating-your-general-contracting-business",
      postContent: <Post5 />
    }
];
