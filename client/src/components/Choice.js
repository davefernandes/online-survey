import React from 'react';

const Choice = ({ choice,cindex,selectedChoice,setSelectedChoice }) => {
  return (
    <div className="survey-choices-buttons">
        <div className={`survey-button ${(selectedChoice===cindex) ? 'choice-selected' : ''}`} onClick={() => setSelectedChoice(cindex)}>
            {choice.choice}
        </div>
    </div>
  );
};

export default Choice;