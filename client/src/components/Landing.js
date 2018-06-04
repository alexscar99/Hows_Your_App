import React from 'react';
import '../style.css';

const Landing = () => {
  return (
    <div className="container">
      <h1 className="landing-title">How's Your App?</h1>
      <h5 className="landing-subtitle">
        Email surveys that improve your application or website
      </h5>

      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card grey lighten-5">
            <div className="card-content">
              <span className="card-title">
                Connect With Your Audience
                <hr className="card-hr" />
              </span>
              <p className="card-p">
                How's Your App is a simplistic way for any project manager,
                application owner, or website administrator to send out succinct
                surveys to their users.
              </p>
              <p className="card-p">
                Data from the email surveys is aggregated and displayed to
                assist you in making business decisions that are mindful of the
                UX of your consumers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
