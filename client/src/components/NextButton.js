import React from 'react';
import './NextButton.css';
import Loader from 'react-loader-spinner';

const NextButton = ( {categories,currentCategory,onButtonClick,currentPage,currentQuestion,questionCount } ) => {
    
    /*
    * Show a spinner until the List of categories is returned
    * and Category is set
    */
   let buttonDisplay = <Loader
            type="Grid"
            color="#48b07a"
            height={50}
            width={50}
            />;
   if( categories.length > 0 && currentCategory !== null ) {

       // Home page button
       if( currentPage === null ) {
           buttonDisplay = <button className="survey-next-button" onClick={onButtonClick}>Take the {categories[currentCategory].name} survey</button>;
       } else {
           if( questionCount <= 0 ) {
                // If no questions then show Loader
           } else if( currentQuestion+1 === questionCount ) {
               // Last question
               buttonDisplay = <button className="survey-next-button" onClick={onButtonClick}>Done</button>;
           } else {
               // Next question
               buttonDisplay = <button className="survey-next-button" onClick={onButtonClick}>Next Question</button>;
           }
       }
   } 

    return (
        <div className="survey-next">
            {buttonDisplay}
        </div>
    );
  
};

export default NextButton;
