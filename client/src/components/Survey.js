import React from 'react';
import SurveyHeader from './SurveyHeader';
import SurveyBody from './SurveyBody';
import NextButton from './NextButton';

const Survey = () => {

    return (
        <React.Fragment>
            <SurveyHeader />
            <SurveyBody />
            <NextButton />
        </React.Fragment>
    );
  
};

export default Survey;
