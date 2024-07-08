// FullArticle.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './fullArticle.css';

const FullArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/blog/${articleId}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  return (
    <div className="full-article">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      {article && (
        <div>
          <h1 className="article-text">{article.text}</h1>
          <p className="article-date">{article.date}</p>
          <div className="article-content">
            {article.content.split('\n\n').map((para, index) => <p key={index}>{para}</p>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default FullArticle;