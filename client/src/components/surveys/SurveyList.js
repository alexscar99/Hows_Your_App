import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card grey lighten-5" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p className="card-p">{survey.body}</p>
            <p className="right card-date">
              Sent:
              <span style={{ paddingLeft: '10px' }}>
                {new Date(survey.dateSent).toLocaleDateString()}
              </span>
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
