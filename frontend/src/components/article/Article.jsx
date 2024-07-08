import React from 'react';
import { Link } from 'react-router-dom';
import './article.css';

const Article = ({ imgUrl, date, text, articleId }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <Link to={`/blog/${articleId}`} className="read-full-article">
        Read Full Article
      </Link>
    </div>
  </div>
);

export default Article;