import React, { useState, useEffect } from 'react';
import survey from '../apis/survey';
import './App.css';
import useCategories from '../hooks/useCategories';
import Survey from './Survey';

const App = () => {

  /* Keep track of Current Page for Sliding Transition */
  const [currentPage, setCurrentPage] = useState(null);

  /* Initialise App with Current Category */ 
  const [currentCategory, setCurrentCategory] = useState(null);

  /* Hook to GET List of Categories */
  const [categories] = useCategories();
  
  /* Initialise App with Empty questins array */
  const [questions, setQuestions] = useState([]); 

  /* Initialise Current Question */ 
  const [currentQuestion, setCurrentQuestion] = useState(null);

  /* Initialise Current Choice */ 
  const [selectedChoice, setSelectedChoice] = useState(null);

  /* Initialise Current Choice Score*/ 
  const [choiceScore, setChoiceScore] = useState(0);

  /* Initialise Check if Final Page (Score Page)*/ 
  const [finalPage, setFinalPage] = useState(false);
  
  /**
   * API Request to GET Questions for a Category
  */
  const getQuestions = async (category) => {
      if( category !== null ) {
        const response = await survey.get('/categories/'+category+'/questions');
        /* Set Questions array */
        setQuestions(response.data);
      }
  };

  /*
  * Once API returns the list of Categories, set currentCategory as 1st one
  */
  useEffect(() => {
    if( categories.length > 0 ) {
      setCurrentCategory(0);
    } 
  }, [categories]);

  useEffect(() => {
    if( categories.length > 0 ) {
      /* Once Category is Set, get All Questions for that Category */
      getQuestions(categories[currentCategory].id);
      
    } 
  // eslint-disable-next-line
  }, [currentCategory]);

  useEffect(() => {
    if( questions.length > 0 ) {
      /* If there are questions, default to the first */
      setCurrentQuestion(0);
    } 
  }, [questions]);

  const onButtonClick = () => {
    if(finalPage) {
      if(typeof categories[currentCategory+1] !== 'undefined') {

        /* Reset all States for next Category */
        setCurrentPage(null);
        setSelectedChoice(null);
        setChoiceScore(0);        
        setCurrentQuestion(null);
        setQuestions([]);        
        setCurrentCategory(currentCategory+1); 
        setFinalPage(false);        
      } 
    } else {
      if(currentPage === null) {
        /* Go to the first Question */
        setCurrentPage(0);
      } else {
        if(selectedChoice !== null) {

          /* Update the Score  */
          let score = parseFloat(choiceScore) + parseFloat(questions[currentQuestion].choices[selectedChoice].score);
          setChoiceScore(parseFloat(score));

          /* Reset the choice for next question  */
          setSelectedChoice(null); 
          
          if( questions.length === currentPage+1 ) {
            /* Finished all questions */
            setFinalPage(true);
          } else {

            /* Go to the Next Question */
            setCurrentPage(currentPage+1);
            setCurrentQuestion(currentQuestion+1);
          }
            
        }
      }
    }
  }

  return (
    <div className="container">
      <div className="survey-main">

            <Survey 
              categories={categories} 
              currentCategory={currentCategory}           
              questions={questions} 
              currentQuestion={currentQuestion}
              currentPage={currentPage}
              selectedChoice={selectedChoice}
              choiceScore={choiceScore}
              finalPage={finalPage}
              onButtonClick={onButtonClick}
              setSelectedChoice={setSelectedChoice}
              />

      </div>
    </div>
  );

};

export default App;