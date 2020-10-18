import React from 'react';
import HomeLogo from '../assets/HomeLogo';
import './SurveyHeader.css';
import Category from './Category';

const SurveyHeader = ( {categories,currentCategory,currentPage,currentQuestion,questionCount}) => {

    // If it is not the home page, then show the Categories at the top
    if(currentPage !== null) {
        const headerList = categories.map((category) => {
          return (
              <Category 
              category = {category}
              currentCategoryId = {categories[currentCategory].id}
              currentQuestion = {currentQuestion}
              questionCount = {questionCount}
              key = {category.id}
              />
          );
        });
        
        return <div className="survey-header">{headerList}</div>;
    
    } else {
        return (
            <div className="home-header">
                <HomeLogo />
            </div>
        );
    }
  
};

export default SurveyHeader;
