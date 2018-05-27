import React from 'react';
import '../style.css';

const Landing = () => {
  return (
    <div className="container">
      <h1 className="landing-title">How's Your App?</h1>
      <h5 className="landing-subtitle">
        Instantly improve your application or website
      </h5>
      <p />
      <div className="row landing-content">
        <div className="col s3">
          <div className="card grey lighten-5">
            <div className="card-content black-text">
              <span className="card-title">Detailed Surveys</span>
              <hr />
              <p>
                Create surveys that allow you to ask your consumers the
                questions you want
              </p>
            </div>
          </div>
        </div>

        <div className="col s1 landing-arrow">
          <i className="medium material-icons">arrow_forward</i>
        </div>

        <div className="col s3">
          <div className="card grey">
            <div className="card-content white-text">
              <span className="card-title">Instant Feedback</span>
              <hr />
              <p>
                See what your users have to say about your application or
                website
              </p>
            </div>
          </div>
        </div>

        <div className="col s1 landing-arrow">
          <i className="medium material-icons">arrow_forward</i>
        </div>

        <div className="col s3">
          <div className="card red darken-3">
            <div className="card-content white-text">
              <span className="card-title">Analytics Driven</span>
              <hr />
              <p>
                Aggregate survey data to improve the UX of your target audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
