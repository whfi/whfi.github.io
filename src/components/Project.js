import React from 'react';
import GomokuImage from './img/gomoku.jpg';
import OoniImage from './img/ooni.png';

const Project = () => {
  return (
    <section className="section grey lighten-5 section-project grey-text text-darken-2 scrollspy" id="project">
      <div className="container">
        <h3 className="center">Projects</h3>
        <h6 className="grey-text text-darken-1 center">
          Looking for something fun and relaxing to play?
        </h6>
        <h6 className="grey-text text-darken-1 center">
          Check out the details of my projects on my <span className="light-blue-text text-accent-4"><a href="https://github.com/whfi?tab=repositories" target="_blank" id="github-repo-link" rel="noreferrer">GitHub</a></span> Profile.
        </h6>
        <div className="row">

        <div className="col s12 m6">
            <div className="card">
              <a href="https://ooni.com">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="responsive-img activator" src={OoniImage} alt="Ooni Pizza Ovens" />
                </div>
                <div className="card-action">
                  <p className="activator valign-wrapper">
                    <span className="grey-text text-darken-1">Delivery features using React, TypeScript, and Liquid, ensuring an outstanding online shopping experience for the joy of homemade pizzas. </span>
                    <span className="new badge blue right activator" data-badge-caption="Shopify"></span>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <a href="./gomoku">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="responsive-img activator" src={GomokuImage} alt="Gomoku" />
                  <span className="card-title activator">Gomoku</span>
                </div>
                <div className="card-action">
                  <p className="activator valign-wrapper">
                    <span className="grey-text text-darken-1">A classic board game involves two players. Be the first to create an unbroken row of five stones horizontally, vertically, or diagonally. </span>
                    <span className="new badge blue right activator" data-badge-caption="React.js"></span>
                  </p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;
