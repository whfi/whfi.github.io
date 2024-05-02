import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const About = () => {
  useEffect(() => {
    const scrollSpy = document.querySelectorAll('.scrollspy');
    M.AutoInit();
    M.ScrollSpy.init(scrollSpy, {});
  }, []);

  return (
    <section className="section black lighten-5 section-about white-text text-darken-2 scrollspy" id="about">
    <div className="container center">
      <h3>👋</h3>
      <h6 className="white-text text-darken-1">I'm Wei, currently working as a Software Engineer at <a href="https://ooni.com" aria-label="Ooni Pizza Ovens" rel="noopener noreferrer">Ooni Pizza Ovens</a>.</h6>
      <h6 className="white-text text-darken-1">
        Seeking new adventures and challenges and I'm eager to connect and explore potential opportunities with you.
      </h6>

      <div className="row center">

        <div className="col s12 m4">
          <div className="card black animated">
            <a href="#" rel="noopener noreferrer">
              <div className="card-image" id="card-image0">
                <div className="overlay"></div>
                <span className="card-title white-text">Building a Seamless User-Friendly Experience</span>
              </div>
            </a>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card black animated">
            <a href="#" rel="noopener noreferrer">
              <div className="card-image" id="card-image1">
                <div className="overlay"></div>
                <span className="card-title white-text">Innovating E-commerce Features and Upselling Strategies</span>
              </div>
            </a>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card black animated">
            <a href="#" rel="noopener noreferrer">
              <div className="card-image" id="card-image2">
                <div className="overlay"></div>
                <span className="card-title white-text">Enhancing Performance and Accessibility Standards</span>
              </div>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
);
}

export default About;
