import React from 'react';
import pizzaImage from './img/pizza.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="section section-learn-more parallax-container scrollspy" id="more-info">
      <div className="parallax">
        <img src={pizzaImage} alt="Pizza view" css={{ opacity: 1, transform: 'translate3d(-50%, 493.307px, 0px)' }} />
        <div className="overlay"></div>
      </div>
      <div id="learn-more-content">
        <div className="container">
          <div className="row center white-text">
            <h4>Discover More</h4>
            <div className="col s8 offset-s2 learn-more-link">
              <a href="https://github.com/whfi?tab=repositories" className="btn brown accent-4" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
              <a href="https://linkedin.com/in/whfi" className="btn brown accent-4" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a href="mailto:omnireal@gmail.com" className="btn brown darken-4" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} /> Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
