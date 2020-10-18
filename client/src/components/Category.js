import React from 'react';

const Category = ({ category,currentCategoryId,currentQuestion,questionCount }) => {
    
    const spanWidth = ( questionCount > 0 && currentCategoryId===category.id ) ? Math.ceil(((currentQuestion+1)/questionCount)*100) : 0;
    
    return (
        <div className="survey-header-cats">
            <div className={`survey-header-progress-bar ${(currentCategoryId===category.id) ? 'survey-header-cat-selected' : ''}`}>
                <span style={{width: spanWidth+'%'}}></span>
            </div>
            <div className="survey-header-text">
                {category.name}
            </div>
        </div>
    );
};

export default Category;