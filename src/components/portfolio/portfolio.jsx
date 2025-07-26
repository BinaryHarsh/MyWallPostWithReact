import React from 'react';
import './Portfolio.css'; // Optional: Add styling if needed
import { portfolioItems } from '../../assets/styles/portfolio.js';


const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {portfolioItems.map((item, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <a className="portfolio-box" href={item.fullsize} title={item.name}>
                <img className="img-fluid" src={item.thumbnail} alt="..." />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">{item.category}</div>
                  <div className="project-name">{item.name}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
