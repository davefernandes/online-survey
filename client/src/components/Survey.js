import React from 'react';
import './Survey.css';
import './NextButton.css';
import SurveyHeader from './SurveyHeader';
import SurveyBody from './SurveyBody';
import NextButton from './NextButton';

const Survey = ({categories,currentCategory,questions,currentQuestion,currentPage,selectedChoice,choiceScore,finalPage,onButtonClick,setSelectedChoice}) => {

    if( finalPage ) {
        // Calculated Score
        const totalScore = Number.parseFloat(choiceScore).toFixed(2);
        // Max Score possible, picked up from the Database
        const maxScore = categories[currentCategory].max_score;
        const spanWidth = (maxScore > 0) ? Math.ceil((totalScore/maxScore)*100) : 0;

        /*
        * Check if there is a next Category
        * If yes, Show Continue button
        */

        let checkNextCategory = ''; 
        if( typeof categories[currentCategory+1] !== 'undefined')  {
            checkNextCategory = 
                <div className="final-footer">
                    <div className="final-footer-text">
                        Lets take a look at how you look in the <em style={{color: '#56c6c0'}}>{categories[currentCategory+1].name}</em> category...
                    </div>
                    <div className="survey-next">
                        <button className="survey-next-button" onClick={onButtonClick}>Continue</button>
                    </div>
                </div>;
        }
        

        return (
                <div className="animation-main">
                    <div className="final-header">
                        <div className="final-header-text">
                            {categories[currentCategory].name}
                        </div>
                        <div className="final-header-content">
                            Your score
                        </div>
                    </div>
                    <div className="final-body">
                        <div className="final-body-avg">
                            <span style={{fontWeight: 700}}>UK National average:</span> {categories[currentCategory].avg_score} {categories[currentCategory].units}
                        </div>
                        <div className="final-body-progress-bar">
                            <span style={{width: spanWidth+'%'}}></span>
                        </div>
                        <div className="final-body-score">
                            You're using {totalScore} {categories[currentCategory].units}
                        </div>
                    </div>
                    {checkNextCategory}
                </div>
            );
    } else {

        return (
            <div className="animation-main">
                <SurveyHeader 
                    categories={categories} 
                    currentCategory={currentCategory} 
                    currentPage={currentPage} 
                    currentQuestion={currentQuestion}
                    questionCount={questions.length}                 
                />
                <SurveyBody 
                    currentPage={currentPage}
                    questions={questions}
                    currentQuestion={currentQuestion}
                    selectedChoice={selectedChoice}
                    setSelectedChoice={setSelectedChoice}
                />
                <NextButton 
                    categories={categories} 
                    currentCategory={currentCategory} 
                    currentPage={currentPage} 
                    onButtonClick={onButtonClick} 
                    currentQuestion={currentQuestion}
                    questionCount={questions.length}
                />
            </div>
        );
    }  
};

export default Survey;
