import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const blogImages = [blog01, blog02, blog03, blog04, blog05];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it!</h1>
      </div>
      <div className="gpt3__blog-container">
        {blogs.length > 0 && (
          <div className="gpt3__blog-container_groupA">
            <Article
              imgUrl={blogImages[Math.floor(Math.random() * blogImages.length)]}
              date={blogs[0].date}
              text={blogs[0].text}
              articleId={blogs[0].articleId}
            />
          </div>
        )}
        <div className="gpt3__blog-container_groupB">
          {blogs.slice(1).map((blog) => (
            <Article
              key={blog.articleId}
              imgUrl={blogImages[Math.floor(Math.random() * blogImages.length)]}
              date={blog.date}
              text={blog.text}
              articleId={blog.articleId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;