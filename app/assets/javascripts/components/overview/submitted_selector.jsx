import React from 'react';
import YesNoSelector from './yes_no_selector';

const SubmittedSelector = ({ course, editable }) => {
  return (
    <YesNoSelector
      courseProperty="submitted"
      label={I18n.t("courses.submitted")}
      tooltip={I18n.t("courses.course_submitted")}
      course={course}
      editable={editable}
    />
  );
};

export default SubmittedSelector;
