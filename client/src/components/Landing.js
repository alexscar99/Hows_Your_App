import React from 'react';
import '../style.css';

const Landing = () => {
  return (
    <div className="container">
      <h1 className="landing-title">How's Your App?</h1>
      <h5 className="landing-subtitle">
        Email surveys that improve your application or website
      </h5>

      <div className="row landing-content">
        <div className="col s3">
          <div className="card grey darken-1 white-text">
            <div className="card-content">
              <span className="card-title">Detailed Surveys</span>
              <hr className="card-hr" />
              <p>Create surveys to ask consumers the questions you want</p>
            </div>
          </div>
        </div>

        <div className="col s1 landing-arrow">
          <i className="material-icons arrow-one">arrow_forward</i>
        </div>

        <div className="col s3">
          <div className="card grey darken-1 white-text">
            <div className="card-content">
              <span className="card-title">Instant Feedback</span>
              <hr className="card-hr" />
              <p>See what your users have to say about your app or website</p>
            </div>
          </div>
        </div>

        <div className="col s1 landing-arrow">
          <i className="material-icons arrow-two">arrow_forward</i>
        </div>

        <div className="col s3">
          <div className="card grey darken-1 white-text">
            <div className="card-content">
              <span className="card-title">Analytics Reports</span>
              <hr className="card-hr" />
              <p>
                Utilize survey data to improve the UX of your target audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
