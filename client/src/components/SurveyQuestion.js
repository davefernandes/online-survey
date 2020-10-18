import React from 'react';

const SurveyQuestion = ({ currentPage,questions,currentQuestion }) => {
  return (
    <React.Fragment>
        <div className="survey-question-number">
            Question {currentQuestion+1} of {questions.length}
        </div>
        <div className="survey-question">
            {questions[currentQuestion].question}
        </div>
    </React.Fragment>
  );
};

export default SurveyQuestion;