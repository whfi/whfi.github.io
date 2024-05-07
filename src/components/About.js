import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const About = () => {
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
          <div className="card black">
            <div className="card-block-0">
              <div className="card-image" id="card-image0">
                <div className="overlay"></div>
                <span className="card-title white-text">Building a Seamless User-Friendly Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card black">
            <div className="card-block-1">
              <div className="card-image" id="card-image1">
                <div className="overlay"></div>
                <span className="card-title white-text">Innovating E-commerce Features and Upselling Strategies</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card black">
            <div className="card-block-2">
              <div className="card-image" id="card-image2">
                <div className="overlay"></div>
                <span className="card-title white-text">Enhancing Performance and Accessibility Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h6>Here's a compilation of technologies I've gained experience with throughout my industry tenure. </h6>
        <h6>My recent focus has been on React.js, TypeScript, Liquid, Next.js, Ruby on Rails, GraphQL APIs, REST APIs, SCSS, A/B Testing, Contentful CMS, and Serverless Functions.</h6>

        <div className="row center">
          <div className="col s12 m4">
            <div className="card black">
              <h4>APIs</h4>
              <ul>
                <li>GraphQL</li>
                <li>Postman</li>
                <li>REST</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>Cloud</h4>
              <ul>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Serverless Functions</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>CRO</h4>
              <ul>
                <li>AB Tasty</li>
                <li>Dynamic Yields</li>
                <li>Google Analytics</li>
                <li>Google Optimize</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>Databases</h4>
              <ul>
                <li>MySQL</li>
                <li>Postgres</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>Languages</h4>
              <ul>
                <li>JavaScript</li>
                <li>Liquid</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>Libraries &amp; Frameworks</h4>
              <ul>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>React Native</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>Styling</h4>
              <ul>
                <li>Boostrap</li>
                <li>CSS3</li>
                <li>Flickity</li>
                <li>Materialize</li>
                <li>SASS</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>Third Party</h4>
              <ul>
                <li>Auth0</li>
                <li>Contentful</li>
                <li>GeoTargetly</li>
                <li>Google Analytics</li>
                <li>Google Tag Manager</li>
                <li>Klaviyo</li>
                <li>Iterable</li>
                <li>Shopify</li>
              </ul>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card black">
              <h4>Version Control</h4>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Gitlab</li>
              </ul>
            </div>
          </div>
        </div>

    </div>
  </section>
);
}

export default About;
