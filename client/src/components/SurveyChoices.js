import React from 'react';
import './SurveyChoices.css';
import Choice from './Choice';

const SurveyChoices = ({ choices,selectedChoice,setSelectedChoice }) => {
  if (!choices || choices.length <= 0 ) {
    return <div></div>;
  }
  const choiceList = choices.map((choice,cindex) => {
    return (
        <Choice 
        choice = {choice}
        cindex={cindex}
        selectedChoice = {selectedChoice}
        setSelectedChoice = {setSelectedChoice}
        key = {choice.id}
        />
    );
  });
  
return <div className="survey-choices">{choiceList}</div>;
};

export default SurveyChoices;
