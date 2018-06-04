// SurveyField contains logic to render single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label className="survey-form-label">{label}</label>
      <input {...input} className="survey-form-input" />
      <div className="red-text survey-form-err">{touched && error}</div>
    </div>
  );
};
