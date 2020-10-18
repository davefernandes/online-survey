import React from 'react';
import './SurveyBody.css';
import SurveyQuestion from './SurveyQuestion';
import SurveyChoices from './SurveyChoices';
import { SwitchTransition, CSSTransition } from "react-transition-group";

const SurveyBody = ( {currentPage,questions,currentQuestion,selectedChoice,setSelectedChoice} ) => {

    // Show home page content if currentPage is not set
    if( currentPage === null ) {
        return (
            <div className="home-body">
                <div className="home-body-header">
                    Calculate your personal score
                </div>
                <div className="home-body-content">
                    Next we have a short 2-3 minute survey covering Diet, Home, Travel and Other that will let us calculate your personal carbon footprint.
                </div>
            </div>
        );
    } else {

        // Only show if there are questions in the array
        if( questions.length > 0 ) {
            return (
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={currentPage}
                        timeout={400}
                        classNames="fade"
                    >
                        <div className="survey-body">
                            <SurveyQuestion currentPage={currentPage} questions={questions} currentQuestion={currentQuestion} />
                            <SurveyChoices choices={questions[currentQuestion].choices} selectedChoice={selectedChoice} setSelectedChoice={setSelectedChoice} />
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            );
        } else {
            return (
                <div className="home-body">
                    <div className="home-body-header">
                        This survey is currently unavailable
                    </div>
                </div>
            );
        }
    }
  
};

export default SurveyBody;
